import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
declare var f3: any;
@Component({
  selector: 'app-family-chart',
  templateUrl: './family-chart.component.html',
  styleUrls: ['./family-chart.component.scss']
})
export class FamilyChartComponent {
  // public data: any =  
  // [
  //   {
  //     "id": "0",
  //     "rels": {
  //       "spouses": [
  //         "44cfba7d-b355-45c7-979e-312d901d6c05"
  //       ],
  //       "children": [
  //         "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //         "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //         "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //         "1dd24ce8-29d3-4740-8669-6bc8ec7b2a59",
  //         "7ec1fdce-19d5-497b-8894-905e6b048a8d"
  //       ]
  //     },
  //     "data": {
  //       "first name": "Sharf Din",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": "",
  //       "gender": "M"
  //     }
  //   },
  //   {
  //     "id": "44cfba7d-b355-45c7-979e-312d901d6c05",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Sharif Wife",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "0"
  //       ],
  //       "children": [
  //         "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //         "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //         "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //         "1dd24ce8-29d3-4740-8669-6bc8ec7b2a59",
  //         "7ec1fdce-19d5-497b-8894-905e6b048a8d"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Samani BiBi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "44cfba7d-b355-45c7-979e-312d901d6c05",
  //       "father": "0",
  //       "spouses": [
  //         "875d8c7c-1d30-4142-9b21-1958d9221ff8"
  //       ],
  //       "children": [
  //         "baf2f5d5-0e2a-4e66-8040-02f73ad1f286",
  //         "b025af53-b3c5-4890-b3f6-953f36a2706b",
  //         "05cd238f-7121-4fc9-9593-228a9a1d336f",
  //         "a1119176-d07e-42b8-a338-ebad939d2d48",
  //         "999a17f8-2d94-4c0a-9748-4d6ffd9bfe8e"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Basri Bibi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "44cfba7d-b355-45c7-979e-312d901d6c05",
  //       "father": "0",
  //       "spouses": [
  //         "a8b4d18d-1d76-4fa9-af49-06601bddd11b"
  //       ],
  //       "children": [
  //         "99d4c189-eb48-4e10-9ed6-0ca45cb53301",
  //         "b5b1ecbc-7e44-4981-af8c-44a37d494bf5",
  //         "486031ea-4b67-4b46-9d2a-5f4a7f76ab9c",
  //         "18af6b51-e4e7-44aa-ba21-8d4d66a8df01"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Qutub ud din",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "44cfba7d-b355-45c7-979e-312d901d6c05",
  //       "father": "0",
  //       "spouses": [
  //         "4bc177df-7e92-4aba-8413-c5c9c3cd5737",
  //         "0b4fe896-ceec-4b99-bdc9-5ff5bbc77df1"
  //       ],
  //       "children": [
  //         "9f627cbb-1f26-49dc-979d-05b7d90b2444",
  //         "bc6afd6f-e35c-4162-bb57-707e895ae1f6",
  //         "3e6c00f2-f393-4af7-b9dd-b8eb55aa7bbe",
  //         "cbb5ea19-2cc6-4fd6-880d-b00c15e73622",
  //         "65e7d223-7fdf-4242-a48f-bf84258f00c4",
  //         "c28af4ad-a8da-4526-b509-d5fa4cda3863",
  //         "d2c3226d-dd96-431a-9b9d-5f94817f0a27",
  //         "751f7e1b-8086-4b2f-a1b2-4e97c9c06cd5"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "1dd24ce8-29d3-4740-8669-6bc8ec7b2a59",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Saab Noor (Saabo)",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "44cfba7d-b355-45c7-979e-312d901d6c05",
  //       "father": "0",
  //       "spouses": [
  //         "3da83310-f8f3-4799-951b-3401cd203f68"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "7ec1fdce-19d5-497b-8894-905e6b048a8d",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Mando Bibi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "44cfba7d-b355-45c7-979e-312d901d6c05",
  //       "father": "0",
  //       "spouses": [
  //         "c754db83-c1e0-48b9-8ddc-d1dda0350d24"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "875d8c7c-1d30-4142-9b21-1958d9221ff8",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Bagh Ali (Bagho)",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "6eee8fce-3221-445c-9a0f-9de57cfb30d4"
  //       ],
  //       "children": [
  //         "baf2f5d5-0e2a-4e66-8040-02f73ad1f286",
  //         "b025af53-b3c5-4890-b3f6-953f36a2706b",
  //         "05cd238f-7121-4fc9-9593-228a9a1d336f",
  //         "a1119176-d07e-42b8-a338-ebad939d2d48",
  //         "999a17f8-2d94-4c0a-9748-4d6ffd9bfe8e"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "a8b4d18d-1d76-4fa9-af49-06601bddd11b",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Iqbal (Kaloo)",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "1f111aed-32c3-43a9-a41f-acc3961adb45"
  //       ],
  //       "children": [
  //         "99d4c189-eb48-4e10-9ed6-0ca45cb53301",
  //         "b5b1ecbc-7e44-4981-af8c-44a37d494bf5",
  //         "486031ea-4b67-4b46-9d2a-5f4a7f76ab9c",
  //         "18af6b51-e4e7-44aa-ba21-8d4d66a8df01"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "4bc177df-7e92-4aba-8413-c5c9c3cd5737",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Fateh Bi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "376ad9bf-d5c3-4505-8242-e6b0058e520c"
  //       ],
  //       "children": [
  //         "9f627cbb-1f26-49dc-979d-05b7d90b2444",
  //         "bc6afd6f-e35c-4162-bb57-707e895ae1f6",
  //         "3e6c00f2-f393-4af7-b9dd-b8eb55aa7bbe",
  //         "cbb5ea19-2cc6-4fd6-880d-b00c15e73622"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "0b4fe896-ceec-4b99-bdc9-5ff5bbc77df1",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Gaami Bibi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "376ad9bf-d5c3-4505-8242-e6b0058e520c"
  //       ],
  //       "children": [
  //         "65e7d223-7fdf-4242-a48f-bf84258f00c4",
  //         "c28af4ad-a8da-4526-b509-d5fa4cda3863",
  //         "d2c3226d-dd96-431a-9b9d-5f94817f0a27",
  //         "751f7e1b-8086-4b2f-a1b2-4e97c9c06cd5"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "3da83310-f8f3-4799-951b-3401cd203f68",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Saif Ali",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "1dd24ce8-29d3-4740-8669-6bc8ec7b2a59"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "c754db83-c1e0-48b9-8ddc-d1dda0350d24",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Bagh Ali",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "7ec1fdce-19d5-497b-8894-905e6b048a8d"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "baf2f5d5-0e2a-4e66-8040-02f73ad1f286",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Zareena Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //       "father": "875d8c7c-1d30-4142-9b21-1958d9221ff8"
  //     }
  //   },
  //   {
  //     "id": "b025af53-b3c5-4890-b3f6-953f36a2706b",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Zaman Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //       "father": "875d8c7c-1d30-4142-9b21-1958d9221ff8",
  //       "spouses": [
  //         "235f5b01-a2e0-4745-8564-5210ad08ba3c"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "05cd238f-7121-4fc9-9593-228a9a1d336f",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Fazal Dad",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //       "father": "875d8c7c-1d30-4142-9b21-1958d9221ff8",
  //       "spouses": [
  //         "69f381ee-9fc2-4ac3-ad09-73ec30116c2f"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "a1119176-d07e-42b8-a338-ebad939d2d48",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Imam Din",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //       "father": "875d8c7c-1d30-4142-9b21-1958d9221ff8",
  //       "spouses": [
  //         "830192fe-5e13-4ac4-924d-92e4a225f279"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "999a17f8-2d94-4c0a-9748-4d6ffd9bfe8e",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Nizam Din",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "6eee8fce-3221-445c-9a0f-9de57cfb30d4",
  //       "father": "875d8c7c-1d30-4142-9b21-1958d9221ff8"
  //     }
  //   },
  //   {
  //     "id": "235f5b01-a2e0-4745-8564-5210ad08ba3c",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mohammad Baksh",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "b025af53-b3c5-4890-b3f6-953f36a2706b"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "69f381ee-9fc2-4ac3-ad09-73ec30116c2f",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Anwar begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "05cd238f-7121-4fc9-9593-228a9a1d336f"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "830192fe-5e13-4ac4-924d-92e4a225f279",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Alif Bibi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "a1119176-d07e-42b8-a338-ebad939d2d48"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "99d4c189-eb48-4e10-9ed6-0ca45cb53301",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Said Mohammad",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //       "father": "a8b4d18d-1d76-4fa9-af49-06601bddd11b",
  //       "spouses": [
  //         "05d2f67c-1ade-4f9f-9074-348d19cc4801"
  //       ],
  //       "children": [
  //         "b4aaeb72-aadd-485d-996c-5ac755f7ff2a",
  //         "c5d0d8b5-adfa-412e-a2b9-d85601c93513",
  //         "7cdb08b5-1fca-4670-93d1-3c797abafd6e",
  //         "20adcd6c-c9ba-43f7-a489-f6c39e58b771"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "b5b1ecbc-7e44-4981-af8c-44a37d494bf5",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Saido",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //       "father": "a8b4d18d-1d76-4fa9-af49-06601bddd11b",
  //       "spouses": [
  //         "b7887b12-c332-4a14-9f17-2176f6dfd4b0"
  //       ],
  //       "children": [
  //         "556822e5-16ab-4781-bf97-b205d3b4a509",
  //         "1abac4fc-846d-4deb-b1c6-6c065d097dab"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "486031ea-4b67-4b46-9d2a-5f4a7f76ab9c",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Raaj Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //       "father": "a8b4d18d-1d76-4fa9-af49-06601bddd11b",
  //       "spouses": [
  //         "b05dc425-e036-4cd5-8361-94e679d160ef"
  //       ],
  //       "children": [
  //         "4897e3c8-6e48-4dc5-8264-b328d6dc3bf9",
  //         "886565ba-9bba-48c2-96ae-9390cd1f02e0"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "18af6b51-e4e7-44aa-ba21-8d4d66a8df01",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Dewaan Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "1f111aed-32c3-43a9-a41f-acc3961adb45",
  //       "father": "a8b4d18d-1d76-4fa9-af49-06601bddd11b",
  //       "spouses": [
  //         "624fe3ae-7b2e-4121-915e-cc3edef8f898"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "05d2f67c-1ade-4f9f-9074-348d19cc4801",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Mirza Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "99d4c189-eb48-4e10-9ed6-0ca45cb53301"
  //       ],
  //       "children": [
  //         "b4aaeb72-aadd-485d-996c-5ac755f7ff2a",
  //         "c5d0d8b5-adfa-412e-a2b9-d85601c93513",
  //         "7cdb08b5-1fca-4670-93d1-3c797abafd6e",
  //         "20adcd6c-c9ba-43f7-a489-f6c39e58b771"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "b7887b12-c332-4a14-9f17-2176f6dfd4b0",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Fateh Mohammad",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "b5b1ecbc-7e44-4981-af8c-44a37d494bf5"
  //       ],
  //       "children": [
  //         "556822e5-16ab-4781-bf97-b205d3b4a509",
  //         "1abac4fc-846d-4deb-b1c6-6c065d097dab"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "b05dc425-e036-4cd5-8361-94e679d160ef",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Sadiq Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "486031ea-4b67-4b46-9d2a-5f4a7f76ab9c"
  //       ],
  //       "children": [
  //         "4897e3c8-6e48-4dc5-8264-b328d6dc3bf9",
  //         "886565ba-9bba-48c2-96ae-9390cd1f02e0"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "624fe3ae-7b2e-4121-915e-cc3edef8f898",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Feroze",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "18af6b51-e4e7-44aa-ba21-8d4d66a8df01"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "b4aaeb72-aadd-485d-996c-5ac755f7ff2a",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mohmammed Manzoor",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "05d2f67c-1ade-4f9f-9074-348d19cc4801",
  //       "father": "99d4c189-eb48-4e10-9ed6-0ca45cb53301"
  //     }
  //   },
  //   {
  //     "id": "c5d0d8b5-adfa-412e-a2b9-d85601c93513",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mohmammed Ashraf",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "05d2f67c-1ade-4f9f-9074-348d19cc4801",
  //       "father": "99d4c189-eb48-4e10-9ed6-0ca45cb53301"
  //     }
  //   },
  //   {
  //     "id": "7cdb08b5-1fca-4670-93d1-3c797abafd6e",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mohmammed Akram",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "05d2f67c-1ade-4f9f-9074-348d19cc4801",
  //       "father": "99d4c189-eb48-4e10-9ed6-0ca45cb53301"
  //     }
  //   },
  //   {
  //     "id": "20adcd6c-c9ba-43f7-a489-f6c39e58b771",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Pua Sandal Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "05d2f67c-1ade-4f9f-9074-348d19cc4801",
  //       "father": "99d4c189-eb48-4e10-9ed6-0ca45cb53301"
  //     }
  //   },
  //   {
  //     "id": "556822e5-16ab-4781-bf97-b205d3b4a509",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mohammad Rehman",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "b5b1ecbc-7e44-4981-af8c-44a37d494bf5",
  //       "father": "b7887b12-c332-4a14-9f17-2176f6dfd4b0",
  //       "spouses": [
  //         "8a748dab-8f43-4550-aa3c-acbd2702e88b",
  //         "1f48c00c-8edc-4e42-b5b8-d07020397b71"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "1abac4fc-846d-4deb-b1c6-6c065d097dab",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Qurban Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "b5b1ecbc-7e44-4981-af8c-44a37d494bf5",
  //       "father": "b7887b12-c332-4a14-9f17-2176f6dfd4b0",
  //       "spouses": [
  //         "b95fbf64-049c-40d3-bf08-a6beffeed15c"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "8a748dab-8f43-4550-aa3c-acbd2702e88b",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Chandi Bibi",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "556822e5-16ab-4781-bf97-b205d3b4a509"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "1f48c00c-8edc-4e42-b5b8-d07020397b71",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Sharifa Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "556822e5-16ab-4781-bf97-b205d3b4a509"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "b95fbf64-049c-40d3-bf08-a6beffeed15c",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Jeeda Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "1abac4fc-846d-4deb-b1c6-6c065d097dab"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "4897e3c8-6e48-4dc5-8264-b328d6dc3bf9",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Ayub Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "mother": "486031ea-4b67-4b46-9d2a-5f4a7f76ab9c",
  //       "father": "b05dc425-e036-4cd5-8361-94e679d160ef",
  //       "spouses": [
  //         "e87dfa20-9453-408a-b378-c0a5d917748a"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "886565ba-9bba-48c2-96ae-9390cd1f02e0",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Khadim Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "b05dc425-e036-4cd5-8361-94e679d160ef",
  //       "mother": "486031ea-4b67-4b46-9d2a-5f4a7f76ab9c",
  //       "spouses": [
  //         "6032d035-f7fd-459b-b6ef-884515359b7d"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "e87dfa20-9453-408a-b378-c0a5d917748a",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Nasreen Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "4897e3c8-6e48-4dc5-8264-b328d6dc3bf9"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "6032d035-f7fd-459b-b6ef-884515359b7d",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Matloob Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "886565ba-9bba-48c2-96ae-9390cd1f02e0"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "9f627cbb-1f26-49dc-979d-05b7d90b2444",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Bayji Sardara",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "4bc177df-7e92-4aba-8413-c5c9c3cd5737"
  //     }
  //   },
  //   {
  //     "id": "bc6afd6f-e35c-4162-bb57-707e895ae1f6",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Fazal Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "4bc177df-7e92-4aba-8413-c5c9c3cd5737",
  //       "spouses": [
  //         "745d3665-9746-4be6-bef1-5f7e505663c1"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "3e6c00f2-f393-4af7-b9dd-b8eb55aa7bbe",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mohammad Hussain",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "4bc177df-7e92-4aba-8413-c5c9c3cd5737",
  //       "spouses": [
  //         "c83b779a-1512-410f-86ec-772555898cce"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "cbb5ea19-2cc6-4fd6-880d-b00c15e73622",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Shareef Chohan",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "4bc177df-7e92-4aba-8413-c5c9c3cd5737",
  //       "spouses": [
  //         "8a49dbf5-b94f-4ad4-b76b-29760fef4dba",
  //         "12b8ffb1-6ca5-4919-b35b-5c4af0c5bfa0"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "65e7d223-7fdf-4242-a48f-bf84258f00c4",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Mirza Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "0b4fe896-ceec-4b99-bdc9-5ff5bbc77df1"
  //     }
  //   },
  //   {
  //     "id": "c28af4ad-a8da-4526-b509-d5fa4cda3863",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Karam Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "0b4fe896-ceec-4b99-bdc9-5ff5bbc77df1",
  //       "spouses": [
  //         "4ba8716d-eeff-4553-9e1b-265ebcefb154"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "d2c3226d-dd96-431a-9b9d-5f94817f0a27",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Beebo Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "0b4fe896-ceec-4b99-bdc9-5ff5bbc77df1",
  //       "spouses": [
  //         "fb125e97-1045-4655-ba36-89e5c654885f"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "751f7e1b-8086-4b2f-a1b2-4e97c9c06cd5",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Sattar Din",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "father": "376ad9bf-d5c3-4505-8242-e6b0058e520c",
  //       "mother": "0b4fe896-ceec-4b99-bdc9-5ff5bbc77df1",
  //       "spouses": [
  //         "297441e6-72fc-4108-a0d3-48d239ace358"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "745d3665-9746-4be6-bef1-5f7e505663c1",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Reshma Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "bc6afd6f-e35c-4162-bb57-707e895ae1f6"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "c83b779a-1512-410f-86ec-772555898cce",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Raaj Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "3e6c00f2-f393-4af7-b9dd-b8eb55aa7bbe"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "8a49dbf5-b94f-4ad4-b76b-29760fef4dba",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Bayji Seyd",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "cbb5ea19-2cc6-4fd6-880d-b00c15e73622"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "12b8ffb1-6ca5-4919-b35b-5c4af0c5bfa0",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Zareena Begum",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "cbb5ea19-2cc6-4fd6-880d-b00c15e73622"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "4ba8716d-eeff-4553-9e1b-265ebcefb154",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Mulla Patha",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "c28af4ad-a8da-4526-b509-d5fa4cda3863"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "fb125e97-1045-4655-ba36-89e5c654885f",
  //     "data": {
  //       "gender": "M",
  //       "first name": "Naik Mohammad",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "d2c3226d-dd96-431a-9b9d-5f94817f0a27"
  //       ]
  //     }
  //   },
  //   {
  //     "id": "297441e6-72fc-4108-a0d3-48d239ace358",
  //     "data": {
  //       "gender": "F",
  //       "first name": "Fateh Noor",
  //       "last name": "",
  //       "birthday": "",
  //       "avatar": ""
  //     },
  //     "rels": {
  //       "spouses": [
  //         "751f7e1b-8086-4b2f-a1b2-4e97c9c06cd5"
  //       ]
  //     }
  //   }
  // ]
  public data:any[]=[];
  constructor(private http:HttpClient){

  }
  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/api/read-json').subscribe((res:any)=>{
      if(res){
        this.data=res;
        this.drawFamilyChart();

      }
    })
  }

  private drawFamilyChart() {
    const store = f3.createStore({
        data: this.data,
        node_separation: 250,
        level_separation: 150,
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector('#FamilyChart'),
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {
          w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5,
        },
        card_display: [(d:any) => `${d.data['first name'] || ''} ${d.data['last name'] || ''}`,(d:any) => `${d.data['birthday'] || ''}`],
        mini_tree: true,
        link_break: true,
        cardEditForm:((props: any) =>console.log("cardEditForm",props)),
        addRelative :((props: any) =>console.log("addRelative",props))
      });

    view.setCard(Card);
    store.setOnUpdate((props: any) => view.update(props || {}));
    store.update.tree({ initial: true });
  }
}
