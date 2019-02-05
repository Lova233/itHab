import { Component, OnInit, Input, } from '@angular/core';
import { CompileTemplateMetadata } from '@angular/compiler';
import { ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { reduce } from 'rxjs/operators';


@Component({
  selector: 'app-habit-records',
  templateUrl: './habit-records.component.html',
  styleUrls: ['./habit-records.component.css']
})
export class HabitRecordsComponent{
  @Input()
  habitsComplete:any;
  formattedHabits:any;

  week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  fakedata =
    [
      {
        "Created_at": 1547491716787,
        "Frequency": {
          "wrapperName": "Set",
          "values": [7,6,2,1],
          "type": "Number"
        },
        "IsActive": true,
        "Description": "Walk 100km",
        "Color": "#E97825",
        "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
        "Username": "AndreaLovati",
        "completed": [
          {
            "Completed_task_id": "8916a260-20a7-11e9-9141-b5222218a845",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Mon Dec 31 2018",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8916a260-20a7-11e9-9141-b5222218a845",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Tue Jan 01 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89d9cb50-20a7-11e9-aba9-bfbe47c04a8d",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Wed Jan 02 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89ec1ad0-20a7-11e9-baba-9fd8ba6c16b6",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Thu Jan 03 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "897f7650-20a7-11e9-bc53-636b22f50937",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Fri Jan 04 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89f1c020-20a7-11e9-9a1e-dfb4c3553395",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Sat Jan 05 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8a056f30-20a7-11e9-819c-df1f3c2aac1f",
            "Task_id": "00397030-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Sun Jan 06 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
        ]
      },
      {
        "Created_at": 1547491778508,
        "Frequency": {
          "wrapperName": "Set",
          "values": [ 5,4,3,1],
          "type": "Number"
        },
        "IsActive": true,
        "Description": "Drink 4lt Water",
        "Color": "#ED1E24",
        "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
        "Username": "AndreaLovati",
        "completed": [
          {
            "Completed_task_id": "89173ea0-20a7-11e9-a339-a12bb4a92532",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Mon Dec 01 2018",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89939a90-20a7-11e9-88a7-6b78257f3551",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Tue Jan 01 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89778710-20a7-11e9-9bdf-4dba03767a0d",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Wed Jan 02 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "892918f0-20a7-11e9-8744-8d36056a8728",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Thu Jan 03 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "898c6ea0-20a7-11e9-8644-b1cafe47e2a0",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Fri Jan 04 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89c4bcb0-20a7-11e9-8a04-81d8d42c096b",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Sat Jan 05 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8a08ca90-20a7-11e9-a0e2-6358937b85b8",
            "Task_id": "250350c0-182d-11e9-957b-79c872c75fe1",
            "Completed_at": "Sun Jan 06 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          }
        ]
      },
      {
        "Created_at": 1547492228254,
        "Frequency": {
          "wrapperName": "Set",
          "values": [7,6,5,4,3,2,1],
          "type": "Number"
        },
        "IsActive": true,
        "Description": "Study 2",
        "Color": "#F4ED59",
        "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
        "Username": "AndreaLovati",
        "completed": [
          {
            "Completed_task_id": "89f96140-20a7-11e9-8f09-cf2806cce3ff",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Mon Dec 31 2018",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89198890-20a7-11e9-9cdb-d9f99831c61d",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Tue Jan 01 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8a0b89b0-20a7-11e9-bc7b-15279971b96f",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Wed Jan 02 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89aaa500-20a7-11e9-8cd6-5fa090dc906e",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Thu Jan 03 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "897479d0-20a7-11e9-a811-bf7a0e14f84e",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Fri Jan 04 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "86bfba10-20a7-11e9-85a5-d5b46c3f3c15",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Sat Jan 05 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "869304c0-20a7-11e9-b0bd-efc784619225",
            "Task_id": "31151be0-182e-11e9-957b-79c872c75fe1",
            "Completed_at": "Sun Jan 09 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          }
        ]
      },
      {
        "Created_at": 1547491542176,
        "Frequency": {
          "wrapperName": "Set",
          "values": [7,6,5,4],
          "type": "Number"
        },
        "IsActive": true,
        "Description": "Home drinking food2",
        "Color": "#00A651",
        "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
        "Username": "AndreaLovati",
        "completed": [
          {
            "Completed_task_id": "898b3620-20a7-11e9-9174-7bf555448633",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Mon Dec 31 2018",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "891569e0-20a7-11e9-b890-53d532144b0d",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Tue Jan 01 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8910fd10-20a7-11e9-a340-9934b86f1319",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Wed Jan 02 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89736860-20a7-11e9-a1da-efcddbaa287f",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Thu Jan 03 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "898d31f0-20a7-11e9-8f8b-bfaef1b841a3",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Fri Jan 04 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89814b10-20a7-11e9-abc5-cd7ff5937fe6",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Sat Jan 05 2019",
            "Completed": "NC",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8a023ae0-20a7-11e9-9b7e-03c3288d6108",
            "Task_id": "9825ea00-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Sun Jan 06 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          }
        ]
      },
      {
        "Created_at": 1547491574168,
        "Frequency": {
          "wrapperName": "Set",
          "values": [7,4,3,2,1],
          "type": "Number"
        },
        "IsActive": true,
        "Description": "New habit 4",
        "Color": "#912AD6",
        "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
        "Username": "AndreaLovati",
        "completed": [
          {
            "Completed_task_id": "89896160-20a7-11e9-a5ac-8f620d2b375c",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Mon Dec 31 2018",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "892e4910-20a7-11e9-878f-07e9063efbbc",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Tue Jan 01 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "892855a0-20a7-11e9-a5c4-73e9c2f1ad74",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Wed Jan 02 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "8990b460-20a7-11e9-bb41-a986a5d9e18f",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Thu Jan 03 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "897e64e0-20a7-11e9-a073-3bc737e40963",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Fri Jan 04 2019",
            "Completed": "CMP",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "897404a0-20a7-11e9-abb5-a9964bdba0ae",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Sat Jan 05 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          },
          {
            "Completed_task_id": "89b0e690-20a7-11e9-928a-a52dec14679c",
            "Task_id": "ab378180-182c-11e9-957b-79c872c75fe1",
            "Completed_at": "Sun Jan 06 2019",
            "Completed": "NA",
            "Username": "AndreaLovati"
          }
        ]
      }
    ]
  


  
  

  constructor(private cdRef:ChangeDetectorRef) { }

  ngAfterViewChecked(): void {

  }




  
}