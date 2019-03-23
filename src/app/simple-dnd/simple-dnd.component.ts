import {Component, OnInit} from '@angular/core';
import {MockHeroService} from '../services/mock-hero.service';

export abstract class PropertyConfig {

  id: string;
  name: string;
  label: string;
  type: string;
  subPropertyConfigs: Array<PropertyConfig>;


  constructor() {
    this.subPropertyConfigs = [];
  }
}

export class Campaign {


  id: string;

  name: string;
  description: string;
  status: string;
  pointReward: number;
  propertyConfigs: Array<PropertyConfig>;
  targetObject: string;
  referenceValidation: ReferenceValidation;

  constructor() {
    this.propertyConfigs = [];

  }
}

export class ReferenceValidation {
  maxValidDuration: number;
  maxLightsOn: number;
}


@Component({
  selector: 'app-simple-dnd',
  templateUrl: './simple-dnd.component.html',
  styleUrls: ['./simple-dnd.component.css']
})


export class SimpleDndComponent implements OnInit {
  campaign: Campaign;
  selectedScreenId: string;
  previousIndex: number = 0;
  targetObjectArray: Array<any> = [];

  constructor(private heroService: MockHeroService) {
    this.campaign = this.heroService.getCampaign();
  }

  ngOnInit(): void {
    this.campaign.propertyConfigs.forEach((item, index) => this.getConfigs(item, index, true));
    this.targetObjectArray.forEach(item => this.sortArrayElements(item, this.findIndex(item, 'image'), this.findIndex(item, 'measurement')));
  }

  getConfigs(item: PropertyConfig, index: number, newElement: boolean, inside?: boolean) {
    if (newElement) this.targetObjectArray[index] = [];
    if (item.hasOwnProperty('subPropertyConfigs')) {
      if (inside) this.targetObjectArray[index].push(item);
      item['subPropertyConfigs'].forEach(config => this.getConfigs(config, index, false, true));
    } else {
      if (item.type !== 'color') {
        this.targetObjectArray[index].push(item);
      }
    }
  }

  sortArrayElements(array: Array<any>, old_index: number, new_index: number): Array<any> {
    if (new_index >= array.length) {
      let k: number = new_index - array.length + 1;
      while (k--) {
        array.push(undefined);
      }
    }
    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    return array;
  }

  findIndex(array: Array<any>, type: string): number {
    return array.findIndex(element => element.type === type);
  }

  selectScreen(screenId: string): void {
    this.selectedScreenId = screenId;
  }

  updateMetaDataOrder(targetObject: Array<any>, targetIndex: number): void {
    const targetObjectIndex: number = this.targetObjectArray.findIndex(el => el == targetObject),
      desiredIndex: number = targetIndex >= this.previousIndex ? 2 : 0;
    this.sortArrayElements(targetObject, targetIndex, desiredIndex);
    this.previousIndex = this.findIndex(targetObject, 'screen');
    this.targetObjectArray.forEach((item, index) => index !== targetObjectIndex && this.sortArrayElements(item, this.findIndex(item, 'screen'), this.findIndex(targetObject, 'screen')));
    this.prepareCampaignJson(desiredIndex !== 0);
  }

  prepareCampaignJson(first: boolean): void {
    this.campaign.propertyConfigs.forEach(item => this.sortArrayElements(item.subPropertyConfigs, this.findIndex(item.subPropertyConfigs, 'screen'), +first));
    //@TODO send prepared this.campaign variable data to backend
  }
}

