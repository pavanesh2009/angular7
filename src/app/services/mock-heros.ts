import {Hero} from '../model/hero';
import {Campaign} from '../simple-dnd/simple-dnd.component';


export const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice', birthday: '2018-01-04T00:00:00Z'},
  {id: 12, name: 'Narco', birthday: '2018-01-04T00:00:00Z'},
  {id: 13, name: 'Bombasto', birthday: '2018-01-04T00:00:00Z'},
  {id: 14, name: 'Celeritas', birthday: '2018-01-04T00:00:00Z'},
  {id: 15, name: 'Magneta', birthday: '2018-01-04T00:00:00Z'},
  {id: 16, name: 'RubberMan', birthday: '2018-01-04T00:00:00Z'},
  {id: 17, name: 'Dynama', birthday: '2018-01-04T00:00:00Z'},
  {id: 18, name: 'Dr IQ', birthday: '2018-01-04T00:00:00Z'},
  {id: 19, name: 'Magma', birthday: '2018-01-04T00:00:00Z'},
  {id: 20, name: 'Tornado', birthday: '2018-01-04T00:00:00Z'}
];


export const CAMPAIGN: any =
  {
    "modelVersion": 0,
    "id": "182c61bd-5ad3-4f0a-a2d5-8893f9166cd6",
    "name": "Textile Dev Verification Beni",
    "description": "Role: Developer\nPhase: Verification\n\nScan Textile Catalog with partNumbers. Textile metadata is already known.",
    "pointReward": 0,
    "status": "IN_DRAFT",
    "user": {
      "modelVersion": 0,
      "id": "30d1ffdc-2fbb-4a15-9288-98567c7bdf4a"
    },
    "timeRequiredMinutes": 0,
    "coverImage": {
      "id": "7bc9e036-2e97-463a-8bc4-9e71e2ff115f"
    },
    "propertyConfigs": [
      {
        "type": "targetObject",
        "id": "3568a991-8674-4506-aad6-c507ee6dd9fe",
        "name": "target_object",
        "label": "Target Object",
        "subPropertyConfigs": [
          {
            "type": "screen",
            "id": "7a393b22-9d71-423d-b9ae-2ee38fc80456",
            "name": "metadata_screen",
            "label": "Meta Data"
          },
          {
            "type": "measurement",
            "measurementsPerTarget": 5,
            "id": "9255e326-3bb6-4ab4-a406-bd2c7e584434",
            "name": "measurement_screen",
            "label": "Measurement",
            "subPropertyConfigs": [
              {
                "type": "image",
                "id": "748e5e70-6a2e-4e03-8a2f-d32bc3f2bfc6",
                "name": "image_screen",
                "label": "Photo"
              },
              {
                "type": "color",
                "id": "ceab16d1-9988-4e01-9de3-04c4e45bd89b",
                "name": "measurement_color_config",
                "label": "Color Config",
                "pickerType": "BaseColorPicker"
              }
            ]
          }
        ]
      },
      {
        "type": "targetObject",
        "id": "67464ce1-98a5-4418-90b5-d07c73136a12",
        "name": "target_object_container",
        "label": "Target Object Container",
        "subPropertyConfigs": [

          {
            "type": "measurement",
            "measurementsPerTarget": 5,
            "id": "ea6b4e0f-0f3d-4804-9504-00cdcdb94b43",
            "name": "measurement_screen",
            "label": "Measurement",
            "subPropertyConfigs": [
              {
                "type": "image",
                "id": "8832ffb4-58b8-447b-8b1d-46ab100597c1",
                "name": "image_screen",
                "label": "Photo"
              },
              {
                "type": "color",
                "id": "47b6ae23-3079-44f1-b8b6-a9844079f4a0",
                "name": "measurement_color_config",
                "label": "Color Config",
                "pickerType": "BaseColorPicker"
              }
            ]
          },
          {
            "type": "screen",
            "id": "2ab4e95e-a5be-421c-986a-8773a80d1b5d",
            "name": "metadata_screen",
            "label": "Meta Data 1"
          },
        ]
      }
    ],
    "createdAt": "2018-11-13T13:24:55.936+0000",
    "deleted": false,
    "referenceValidation": {
      "maxValidDuration": 0,
      "maxLightsOn": 0
    }
  };
