import { Injectable } from "@angular/core";

@Injectable()
export class Config {
  public activator = "ripple";
  public wordpressApiUrl = "https://deutsche-mitte.de/wp-json";
  //  public wordpressApiUrl = "https://deutsche-mitte.de/wp-json";
  public wordpressMenusNavigation = false;
  public feedsUrl = "./assets/data/feeds.json";
  public feedsCategoryUrl = "./assets/data/feeds-category.json";
  public youtubeKey = "AIzaSyBECpDIgY18MBmc4Uoxpo4L6nX45HFAtIA";
  public youtubeApiUrl = "https://www.googleapis.com/youtube/v3/";
  public youtubeUsername = "Deutsche Mitte";
  public youtubeChannelId = "UCLC_9zmyYs5wFX46KBJz95w";
  public youtubeResults = 50;
  public emailTo = "Kingpin0509@live.de";
}
