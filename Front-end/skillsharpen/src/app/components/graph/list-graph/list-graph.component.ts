import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
@Component({
  selector: 'app-list-graph',
  templateUrl: './list-graph.component.html',
  styleUrls: ['./list-graph.component.css'],
})
export class ListGraphComponent implements OnInit {
  root?: am5.Root;
  // series: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone
  ) {}
  ngOnInit(): void {}
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    console.log('hrr');

    let root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        downDepth: 1,
        initialDepth: 2,
        valueField: 'value',
        categoryField: 'name',
        idField: 'name',
        childDataField: 'children',
        linkWithField: 'link',
        minRadius: 20,
        maxRadius: am5.percent(12),
      })
    );

    series.data.setAll([
      {
        name: 'Développement Web',
        children: [
          {
            name: 'Front-End',

            children: [
              {
                name: 'Html',
                value: 10,
                link: [],
              },
              {
                name: 'CSS',
                value: 30,
                link: [],
              },
              {
                name: 'Js',
                value: 30,
                link: [],
              },
            ],
          },

          {
            name: 'Back-End',

            children: [
              {
                name: 'Java',
                value: 40,
              },
              {
                name: 'PHP',
                value: 30,
              },
              {
                name: 'c#',
                value: 10,
              },
            ],
          },
          {
            name: 'FullStack',
            children: [
              {
                name: 'aws',
                value: 5,
              },
              {
                name: 'html/css/js',
                value: 20,
              },
              {
                name: 'Mobile',
                value: 20,
              },
            ],
          },
        ],
      },
    ]);

    series.set('selectedDataItem', series.dataItems[0]);

    // this.series = container.children.push(
    //   am5hierarchy.ForceDirected.new(root, {
    //     singleBranchOnly: false,
    //     downDepth: 1,
    //     initialDepth: 2,
    //     valueField: 'value',
    //     categoryField: 'name',
    //     childDataField: 'children',
    //     centerStrength: 0.5,
    //   })
    // );
    // let maxLevels = 2;
    // let maxNodes = 5;
    // let maxValue = 100;
    // let data = {
    //   name: 'Informatique',
    //   children: [],
    // };
    // generateLevel(data, '', 0);

    // this.series.data.setAll([data]);
    // this.series.set('selectedDataItem', this.series.dataItems[0]);

    // function generateLevel(
    //   data: { name?: string; children?: any },
    //   name?: any,
    //   level?: any
    // ) {
    //   for (var i = 0; i < Math.ceil(maxNodes * Math.random()) + 1; i++) {
    //     let nodeName: any = name + 'sghggggggggg'[i];
    //     let child: any;
    //     if (level < maxLevels) {
    //       child = {
    //         name: nodeName + level,
    //       };

    //       if (level > 0 && Math.random() < 0.5) {
    //         child.value = Math.round(Math.random() * maxValue);
    //       } else {
    //         child.children = [];
    //         generateLevel(child, nodeName + i, level + 1);
    //       }
    //     } else {
    //       child = {
    //         name: name + i,
    //         value: Math.round(Math.random() * maxValue),
    //       };
    //     }
    //     data.children.push(child);
    //   }

    //   level++;
    //   return data;
    // }
    // this.series.appear(1000, 100);
  }
}