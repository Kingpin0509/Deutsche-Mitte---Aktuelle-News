import { Component, OnInit } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  ModalController,
  ToastController
} from "ionic-angular";
import { ItemSliding } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { FeedService } from "../../../pages/feeds/shared/services/feed.service";
import { FeedComponent } from "../../../pages/feeds/feed/feed.component";
import { YoutubeChannelComponent } from "../../youtube/youtube-channel/youtube-channel.component";
import { YoutubeChannelVideoComponent } from "../../youtube/youtube-channel-video/youtube-channel-video.component";
import { YoutubeService } from "../../youtube/shared/services/youtube.service";
import { WordpressService } from "../shared/services/wordpress.service";
import { WordpressPost } from "../wordpress-post/wordpress-post.component";
@Component({
  templateUrl: "./wordpress-posts-home.html",
  providers: [WordpressService, YoutubeService, FeedService]
})
export class WordpressPostsHome implements OnInit {
  feedUrl: any;
  feeds: any;
  title: string;
  description: string;
  link: string;
  image: string;
  videos: any;
  loader: any;
  posts: any;
  pageCount: number;
  category: any;
  tag: any;
  author: any;
  search: string;
  hideSearchbar: boolean;
  favoritePosts: any;
  constructor(
    private feedService: FeedService,
    private navParams: NavParams,
    private wordpressService: WordpressService,
    private youtubeService: YoutubeService,
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private storage: Storage
  ) {}

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

  ngOnInit() {
    this.loader = this.loadingController.create({
      content: "Bitte Warten!"
    });
    this.feedUrl = "https://valued-crow-812.firebaseapp.com/newsletter.rss";
    this.category = this.navParams.get("category");
    this.tag = this.navParams.get("tag");
    this.author = this.navParams.get("author");
    this.hideSearchbar = true;
    this.search = "";
    this.favoritePosts = [];
    this.storage.get("wordpress.favorite").then(data => {
      if (data) {
        this.favoritePosts = JSON.parse(data);
      }
    });
    this.getPosts();
    this.getFeeds();
    this.getChannel();
  }

  getChannel() {
    this.youtubeService.getChannel().subscribe(
      result => {
        this.videos = result.items;
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    );
  }
  loadVideo(video) {
    this.navController.push(YoutubeChannelVideoComponent, {
      video: video
    });
  }

  getPosts() {
    this.pageCount = 1;
    let query = this.createQuery();
    // let loader = this.loadingController.create({
    //   spinner: "bubbles",
    //   cssClass: `wordpresspostshome`,
    //   content: `Bitte Warten...`,
    //   duration: 1000
    // });
    //loader.present();
    this.wordpressService.getPosts(query).subscribe(result => {
      //loader.dismiss();
      this.posts = result;
    });
  }

  getAuthorPosts(author) {
    this.author = author;
    this.getPosts();
  }

  searchPosts() {
    this.getPosts();
  }

  loadMore(infiniteScroll) {
    this.pageCount++;
    let query = this.createQuery();
    let loader = this.loadingController.create({
      content: "Bitte warten..."
    });
    let toast = this.toastController.create({
      message: "Keine weiteren Beiträge.",
      duration: 2000
    });
    loader.present();
    this.wordpressService.getPosts(query).subscribe(
      result => {
        infiniteScroll.complete();
        if (result.length < 1) {
          infiniteScroll.enable(false);
          toast.present();
        } else {
          this.posts = this.posts.concat(result);
        }
      },
      error => console.log(error),
      () => loader.dismiss()
    );
  }

  loadPost(post) {
    this.navController.push(WordpressPost, {
      post: post
    });
  }

  favoritePost(post) {
    let newPost: Boolean = true;
    let message: string;
    this.favoritePosts.forEach(favPost => {
      if (JSON.stringify(favPost) === JSON.stringify(post)) {
        newPost = false;
      }
    });
    if (newPost) {
      this.favoritePosts.push(post);
      this.storage.set(
        "wordpress.favorite",
        JSON.stringify(this.favoritePosts)
      );
      message = "Beitrag wurde zu deinen Favoriten hinzugefügt";
    } else {
      message = "Beitrag wurde bereits zu deinen Favoriten hinzugefügt";
    }
    let toast = this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  toggleSearchbar() {
    this.hideSearchbar = !this.hideSearchbar;
  }

  createQuery() {
    let query = {};
    query["page"] = this.pageCount;
    if (this.search) {
      query["search"] = this.search;
    }
    if (this.category) {
      query["categories"] = this.category.id;
    }
    if (this.tag) {
      query["tags"] = this.tag.id;
    }
    if (this.author) {
      query["author"] = this.author;
    }
    return query;
  }
  getFeeds() {
    let loader = this.loadingController.create({
      content: "Bitte Warten..."
    });
    loader.present();
    this.feedService.getFeeds(this.feedUrl).subscribe(result => {
      this.title = result.query.results.rss.channel.title;
      this.description = result.query.results.rss.channel.description;
      this.link = result.query.results.rss.channel.link;
      if (result.query.results.rss.channel.image) {
        this.image = result.query.results.rss.channel.image.url;
      }
      this.feeds = result.query.results.rss.channel.item;
      loader.dismiss();
    });
  }
  loadFeed(feed) {
    let modal = this.modalCtrl.create(FeedComponent, {
      feed: feed
    });
    modal.present();
  }
}
