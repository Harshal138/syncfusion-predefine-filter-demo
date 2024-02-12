import {Component, OnInit} from '@angular/core';
import {GroupSettingsModel, SortSettingsModel} from "@syncfusion/ej2-angular-grids";
import {dataSource} from "../dataSource/dataSource";
import {ApiService} from "../dataSource/apis";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = 'syncfusion-predefine-filter-demo';
  gridColumns = [
    {
      "field": "uniqueTitle",
      "headerText": "Unique Title",
      "isVisible": true,
      "isSorting": true,
      "isGrouping": true,
      "isFiltering": true,
      "type": "string",
      "format": null,
      "showInColumnChooser": true,
      "textAlign": null,
      "filter": null
    },
    {
      "field": "uniqueNo",
      "headerText": "Unique No",
      "isVisible": true,
      "isSorting": true,
      "isGrouping": true,
      "isFiltering": true,
      "type": "number",
      "format": null,
      "showInColumnChooser": true,
      "textAlign": null,
      "filter": null
    }
  ];
  gridConfigOptions = {
    allowFiltering: true,
    allowPaging: true,
    allowReordering: true,
    allowResizing: true,
    allowSorting: true,
    allowTextWrap: true,
    showColumnChooser: true,
    selectionSettings: {mode: 'Row', type: 'Single'},
    allowExcelExport: false,
    allowGrouping: true,
    allowPdfExport: false,
    pageSettings: {pageSize: 10, pageSizes: ['10', '20', '50', '100']},
    gridLines: 'Both',
    toolbar: ['Search']
  };
  items:any
  groupSettings : GroupSettingsModel = {};
  sortSettings :  SortSettingsModel = {};
  reqBody:DataManagerRequest = {};

  constructor(private apiService:ApiService) {}

  ngOnInit():void {
    this.reqBody.skip = 0;
    this.reqBody.take = 10;
    this.apiService.getDataSource(this.reqBody).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err):void =>{
        console.log(err)
      }
    })
    setTimeout(():void=>{

      this.items = dataSource.gridResponse;
      this.groupSettings = {
        columns:['uniqueTitle']
      }
      this.sortSettings = {
        columns:['uniqueNo']
      } as SortSettingsModel
    },2000);
  }

  dataStateChangeEvent(event: any):void {
    console.log(event)
  }
}


export interface DataManagerRequest {
  aggregates?: null | Array<Aggregate>;
  antiForgery?: null | string;
  expand?: null | Array<string>;
  group?: null | Array<string>;
  isLazyLoad?: boolean;
  onDemandGroupInfo?: OnDemandGroupInfo;
  requiresCounts?: boolean;
  search?: null | Array<SearchFilter>;
  select?: null | Array<string>;
  skip?: number;
  sorted?: null | Array<Sort>;
  table?: null | string;
  take?: number;
  where?: null | Array<WhereFilter>;
}


export interface Aggregate {
  field?: null | string;
  type?: null | string;
}

export interface OnDemandGroupInfo {
  level?: number;
  skip?: number;
  take?: number;
  where?: null | Array<WhereFilter>;
}

export interface SearchFilter {
  fields?: null | Array<string>;
  key?: null | string;
  operator?: null | string;
}

export interface WhereFilter {
  condition?: null | string;
  field?: null | string;
  ignoreCase?: boolean;
  isComplex?: boolean;
  operator?: null | string;
  predicates?: null | Array<WhereFilter>;
  value?: null | any;
}


export interface Sort {
  direction?: null | string;
  name?: null | string;
}




