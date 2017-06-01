import { Component } from '@angular/core';
import { NavController, Events, MenuController } from 'ionic-angular';
import { WordpressHome } from '../../wordpress/wordpress-home/wordpress-home.component';
import { WordpressPosts } from '../../wordpress/wordpress-posts/wordpress-posts.component';
import { WordpressCategories } from '../../wordpress/wordpress-categories/wordpress-categories.component';
import { WordpressTags } from '../../wordpress/wordpress-tags/wordpress-tags.component';
import { FeedCategoriesComponent } from '../../feeds/feed-categories/feed-categories.component';
import { FeedCategoryComponent } from '../../feeds/feed-category/feed-category.component';
import { YoutubeChannelComponent } from '../../youtube/youtube-channel/youtube-channel.component';
//import { WordpressMenus } from '../../wordpress/wordpress-menus/wordpress-menus.component';
// import { SlidesComponent } from '../../slides/slides-component/slides.component';
//import { YoutubeVideosComponent } from '../../youtube/youtube-videos/youtube-videos.component';
//import { ChartsComponent } from '../../charts/charts-component/charts.component';
//import { FirebaseHomeComponent } from '../../firebase/firebase-home/firebase-home.component';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomeComponent {
	pages: Array<{title: string, component: any, icon: string, note: string, params?: any}>;
	constructor(
		private navController: NavController,
		private menuController: MenuController,
		private events: Events) {}

	ngOnInit() {
	  	this.pages = [
	      { title: 'LOGIN', component: WordpressHome, icon: 'log-in', note: 'Wordpress' },
		  { title: 'POSTS', component: WordpressPosts, icon: 'paper', note: 'Wordpress' },
		  { title: 'CATEGORIES', component: WordpressCategories, icon: 'bookmarks', note: 'Wordpress' },
		  { title: 'TAGS', component: WordpressTags, icon: 'bookmark', note: 'Wordpress' },
	      { title: 'FEEDS', component: FeedCategoriesComponent, icon: 'logo-rss', note: 'RSS (YQL)' },
	      { title: 'FEED_CATEGORY', component: FeedCategoryComponent, icon: 'logo-rss', note: 'RSS (YQL)' },
	      { title: 'YOUTUBE_CHANNEL', component: YoutubeChannelComponent, icon: 'logo-youtube', note: 'Youtube' },
//	      { title: 'YOUTUBE_VIDEOS', component: YoutubeVideosComponent, icon: 'logo-youtube', note: 'Youtube' },
//		  { title: 'CATEGORY', component: WordpressPosts, icon: 'pricetags', note: 'Wordpress', params: { category: { name: 'Category Name', id: 16 }}},
//	      { title: 'MENUS', component: WordpressMenus, icon: 'menu', note: 'Wordpress' },
//	      { title: 'Firebase', component: FirebaseHomeComponent, icon: 'flame', note: 'Firebase' },
//	      { title: 'SLIDES', component: SlidesComponent, icon: 'images', note: 'Welcome Tour' },
//	      { title: 'CHARTS', component: ChartsComponent, icon: 'pie', note: 'Chart.js' },
	    ];

	    this.events.subscribe('navigationEvent',(object) => {
	    	this.menuController.close();
				if (object.component) {
					this.navController.push(object.component, object.params);
				}
		});
	}

	openPage(page) {
		this.navController.push(page.component, page.params);
	}

}
