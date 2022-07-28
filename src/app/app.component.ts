import { Component } from '@angular/core';
import {groupData, nestedListData} from '../data';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public listData: string[] = ["Artwork", "Abstract", "Modern Painting",
   "Ceramics", "Animation Art", "Oil Painting"];

  //JSON Data
  //  public carList: { [key: string]: Object }[] = groupData;

  public nestedData: { [key: string]: Object }[] = nestedListData;

  public remoteData: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  public dataQuery: Query = new Query().select(['FirstName', 'EmployeeID']).take(6).requiresCount();
  public fieldsSettings: object = {id: "id", text: "text"
    , child: "child"};
}
