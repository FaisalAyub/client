import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFamilyMemberComponent } from 'src/app/components/update-family-member/update-family-member.component';
declare var f3: any;
@Component({
  selector: 'app-family-chart',
  templateUrl: './family-chart.component.html',
  styleUrls: ['./family-chart.component.scss']
})
export class FamilyChartComponent {
  public data:any[]=[];
  constructor(private http:HttpClient,private dialog:MatDialog){

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
        cardEditForm:((props: any) =>this.openUpdateDialog(props)),
        addRelative :((props: any) =>console.log("addRelative",props))
      });

    view.setCard(Card);
    store.setOnUpdate((props: any) => view.update(props || {}));
    store.update.tree({ initial: true });
  }

  openUpdateDialog(props:any): void {
    console.log(props);
    const dialogRef = this.dialog.open(UpdateFamilyMemberComponent, {  
      data: {dprops:props.datum}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });
  }
}
