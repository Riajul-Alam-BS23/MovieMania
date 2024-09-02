import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieListsService {
  queryParams: any
  query:any;
  constructor(
  ) { }

  createQueryParams(queryParams: any){
    let query=``;
    query+=`include_adult=${queryParams.get('include_adult')|| 'false'}`;
    query+=`&language=en-US`;
    query+=`&page=${queryParams.get('page')|| '1'}`;
    query+=(queryParams.get('sort_by')?`&sort_by=${queryParams.get('queryParams.get')}`:'&sort_by=popularity.desc');
    if(queryParams.get('primary_release_date.gte'))query+=`&primary_release_date.gte=${queryParams.get('primary_release_date.gte')}`;
    if(queryParams.get('primary_release_date.lte')) query+=`&primary_release_date.lte=${queryParams.get('primary_release_date.lte')}`;
    if(queryParams.get('with_genres')){
      query+=`&with_genres=${queryParams.get('with_genres')}`;
    }
    if(queryParams.get('with_runtime.gte')) query+=`&with_runtime.gte=${queryParams.get('with_runtime.gte')}`;
    if(queryParams.get('with_runtime.lte')) query+=`&with_runtime.lte=${queryParams.get('with_runtime.lte')}`;
    if(queryParams.get('with_keywords')) query+=`&with_keywords=${queryParams.get('with_keywords')}`;
    if(queryParams.get('vote_average.gte')) query+=`&vote_average.gte=${queryParams.get('vote_average.gte')}`;
    if(queryParams.get('vote_average.lte')) query+=`&vote_average.lte=${queryParams.get('vote_average.lte')}`;
    if(queryParams.get('vote_count.lte')) query+=`&vote_count.lte=${queryParams.get('vote_count.lte')}`;
    this.queryParams=query;
  }
  getQueryParams(){
    return this.queryParams;
  }
  // createQueryParams(queryParams: any){
  //   let query=``;
  //   query+=`include_adult=false`;
  //   query+=`&language=en-US`;
  //   query+=`&page=1`;
  //   query+=`&sort_by=popularity.desc`;
  //   this.query=query;
  //   const params =[
  //     `include_adult=${queryParams.get('include_adult')}`,
  //     `language=en-US`,
  //     `page=1`,
  //     queryParams.get('primary_release_date.gte')?`primary_release_date.gte=${queryParams.get('primary_release_date.gte')}`:'',
  //     queryParams.get('primary_release_date.lte')?`primary_release_date.lte=${queryParams.get('primary_release_date.lte')}`:'',
  //     `sort_by=${queryParams.get('sort_by')}`,
  //     queryParams.get('with_genres')?`with_genres=${queryParams.get('with_genres')}`:'',
  //     queryParams.get('with_runtime.gte')?`with_runtime.gte=${queryParams.get('with_runtime.gte')}`:'',
  //     queryParams.get('with_runtime.lte')?`with_runtime.lte=${queryParams.get('with_runtime.lte')}`:'',
  //     queryParams.get('with_keywords')?`with_keywords=${queryParams.get('with_keywords')}`:'',
  //     queryParams.get('vote_average.gte')?`vote_average.gte=${queryParams.get('vote_average.gte')}`:'',
  //     queryParams.get('vote_average.lte')?`vote_average.lte=${queryParams.get('vote_average.lte')}`:'',
  //     queryParams.get('vote_count.lte')?`vote_count.lte=${queryParams.get('vote_count.lte')}`:''
  //   ];
  // }

  // createQueryParams(queryParams: any) {
  //   let query=``;
  //   query+=`include_adult=${queryParams.get('include_adult')|| 'false'}`;
  //   query+=`&language=en-US`;
  //   query+=`&page=1`;
  //   query+=(queryParams.get('queryParams.get')?`&sort_by=${queryParams.get('queryParams.get')}`:'&sort_by=popularity.desc');
  //   if(queryParams.get('primary_release_date.gte'))query+=`&primary_release_date.gte${queryParams.get('primary_release_date.gte')}`;
  //   if(queryParams.get('primary_release_date.lte')) query+=`&primary_release_date.lte=${queryParams.get('primary_release_date.lte')}`;
  //   if(queryParams.get('with_genres')){
  //     query+=`&with_genres=${queryParams.get('with_genres')}`;
  //   }
  //   if(queryParams.get('with_runtime.gte')) query+=`&with_runtime.gte=${queryParams.get('with_runtime.gte')}`;
  //   if(queryParams.get('with_runtime.lte')) query+=`&with_runtime.lte=${queryParams.get('with_runtime.lte')}`;
  //   if(queryParams.get('with_keywords')) query+=`&with_keywords=${queryParams.get('with_keywords')}`;
  //   if(queryParams.get('vote_average.gte')) query+=`&vote_average.gte=${queryParams.get('vote_average.gte')}`;
  //   if(queryParams.get('vote_average.lte')) query+=`&vote_average.lte=${queryParams.get('vote_average.lte')}`;
  //   if(queryParams.get('vote_count.lte')) query+=`&vote_count.lte=${queryParams.get('vote_count.lte')}`;

  //   const params: { [key: string]: string } = {
  //     include_adult: queryParams.get('include_adult') || 'false',
  //     language: 'en-US',
  //     page: '1',
  //     ...(queryParams.get('primary_release_date.gte') && { 'primary_release_date.gte': queryParams.get('primary_release_date.gte') }),
  //     ...(queryParams.get('primary_release_date.lte') && { 'primary_release_date.lte': queryParams.get('primary_release_date.lte') }),
  //     sort_by: queryParams.get('sort_by') || '',
  //     ...(queryParams.get('with_genres') && { with_genres: queryParams.get('with_genres') }),
  //     ...(queryParams.get('with_runtime.gte') && { 'with_runtime.gte': queryParams.get('with_runtime.gte') }),
  //     ...(queryParams.get('with_runtime.lte') && { 'with_runtime.lte': queryParams.get('with_runtime.lte') }),
  //     ...(queryParams.get('with_keywords') && { with_keywords: queryParams.get('with_keywords') }),
  //     ...(queryParams.get('vote_average.gte') && { 'vote_average.gte': queryParams.get('vote_average.gte') }),
  //     ...(queryParams.get('vote_average.lte') && { 'vote_average.lte': queryParams.get('vote_average.lte') }),
  //     ...(queryParams.get('vote_count.lte') && { 'vote_count.lte': queryParams.get('vote_count.lte') })
  //   };
  //   Object.keys(params).forEach(key => {
  //     if (!params[key]) {
  //       delete params[key];
  //     }
  //   });

  //   this.queryParams = query;
  // }
  


}
