import { FilterObj, PlaceWithData } from "../../redux/slices/placeSlice";
import * as cons from "./../../constants";
import * as ct from "./cities";
/**
 * Type
 */

export interface Article {
  slug: string;
  city: ct.City;
  title: string;
  filterObj: FilterObj;
  placeCnt: number;
  omitPlaceIds: string[];
  omitReviewIds: string[];
}

export interface ArticleWithData extends Article {
  placesWithData: PlaceWithData[];
}

/**
 * Articles
 */

const BANGKOK_CORWORKING: Article = {
  slug: `top-coworking-spaces-${ct.THAILAND_BANGKOK.slug}`,
  city: ct.THAILAND_BANGKOK,
  title: "Top 10 Coworking Spaces in Bangkok, Thailand",
  filterObj: {
    placeTypes: [cons.PLACE_TYPE_WORKSPACE],
    availability: [cons.AVL_DROP_IN],
    saved: false,
    wifiSpeed: 0,
    sortBy: cons.SORT_BY_REVIEW,
    reviewStar: 0,
  },
  placeCnt: 10,
  omitPlaceIds: [],
  omitReviewIds: [],
};

const BANGKOK_CAFE: Article = {
  slug: `top-work-study-cafes-${ct.THAILAND_BANGKOK.slug}`,
  city: ct.THAILAND_BANGKOK,
  title: "Best 10 Cafes to Study or Work From in Bangkok, Thailand",
  filterObj: {
    placeTypes: [cons.PLACE_TYPE_CAFE],
    availability: [],
    saved: false,
    wifiSpeed: 0,
    sortBy: cons.SORT_BY_REVIEW,
    reviewStar: 0,
  },
  placeCnt: 10,
  omitPlaceIds: [],
  omitReviewIds: [],
};

const CHANGMAI_PLACE: Article = {
  slug: `places-to-work-from-in-${ct.THAILAND_BANGKOK.slug}`,
  city: ct.THAILAND_CHIANGMAI,
  title:
    "10 Best Work-friendly Cafes & Coworking Spaces in Chiang Mai, Thailand",
  filterObj: {
    placeTypes: [],
    availability: [],
    saved: false,
    wifiSpeed: 0,
    sortBy: cons.SORT_BY_REVIEW,
    reviewStar: 0,
  },
  placeCnt: 10,
  omitPlaceIds: [],
  omitReviewIds: [],
};

const TOKYO_COWORKING: Article = {
  slug: `top-coworking-spaces-${ct.JAPAN_TOKYO.slug}`,
  city: ct.JAPAN_TOKYO,
  title: "Top 10 Coworking Spaces in Tokyo, Japan",
  filterObj: {
    placeTypes: [cons.PLACE_TYPE_WORKSPACE],
    availability: [],
    saved: false,
    wifiSpeed: 0,
    sortBy: cons.SORT_BY_REVIEW,
    reviewStar: 0,
  },
  placeCnt: 10,
  omitPlaceIds: [],
  omitReviewIds: [],
};

const TOKYO_CAFE: Article = {
  slug: `top-work-study-cafes-${ct.JAPAN_TOKYO.slug}`,
  city: ct.JAPAN_TOKYO,
  title: "20 Best Cafes to Study or Work From in Tokyo, Japan",
  filterObj: {
    placeTypes: [cons.PLACE_TYPE_CAFE],
    availability: [],
    saved: false,
    wifiSpeed: 0,
    sortBy: cons.SORT_BY_REVIEW,
    reviewStar: 0,
  },
  placeCnt: 20,
  omitPlaceIds: [],
  omitReviewIds: [],
};

const KYOTO_DROPIN_AND_CAFE: Article = {
  slug: `places-to-work-from-in-${ct.JAPAN_KYOTO.slug}`,
  city: ct.JAPAN_KYOTO,
  title:
    "10 Best Work-friendly Cafes & Coworking Spaces (Drop-in) in Kyoto, Japan",
  filterObj: {
    placeTypes: [
      cons.PLACE_TYPE_CAFE,
      cons.PLACE_TYPE_WORKSPACE,
      cons.PLACE_TYPE_PUBLIC,
    ],
    availability: [cons.AVL_DROP_IN],
    saved: false,
    wifiSpeed: 1,
    sortBy: cons.SORT_BY_REVIEW,
    reviewStar: 0,
  },
  placeCnt: 10,
  omitPlaceIds: [],
  omitReviewIds: [],
};

/**
 * Export
 */

export const ARTICLES: Article[] = [
  // East Asia
  TOKYO_COWORKING,
  TOKYO_CAFE,
  KYOTO_DROPIN_AND_CAFE,
  // South East Asia
  BANGKOK_CORWORKING,
  BANGKOK_CAFE,
  CHANGMAI_PLACE,
  // East Europe
];

export const ARTICLE_LINKS = ARTICLES.map((article) => {
  return {
    url: `${cons.APP_URL}/article/${article.slug}`,
    text: article.title,
  };
});
