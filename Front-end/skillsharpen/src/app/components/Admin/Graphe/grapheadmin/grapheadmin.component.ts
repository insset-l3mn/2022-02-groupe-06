import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
@Component({
  selector: 'app-grapheadmin',
  templateUrl: './grapheadmin.component.html',
  styleUrls: ['./grapheadmin.component.css'],
})
export class GrapheadminComponent implements OnInit {
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
        maxRadius: am5.percent(15),
      })
    );

    series.data.setAll([
      {
        name: 'Informatique',
        children: [
          {
            name: 'Développement Web',

            children: [
              {
                name: 'Front-end',
                value: 40,
                link: [],
                children: [
                  {
                    name: 'Html',
                    value: 40,
                    link: [],
                  },
                  {
                    name: 'CSS',
                    value: 40,
                    link: [],
                  },
                  {
                    name: 'JS',
                    value: 40,
                    link: [],
                  },
                ],
              },

              {
                name: 'Back-end',
                value: 40,
                link: [],
                children: [
                  {
                    name: 'JAVA',
                    value: 40,
                    link: [],
                  },
                  {
                    name: 'C#',
                    value: 40,
                    link: [],
                  },
                  {
                    name: 'PHP',
                    value: 40,
                    link: [],
                  },
                ],
              },
              {
                name: 'Full-Stack',
                value: 40,
                link: [],
                children: [
                  {
                    name: 'AWS',
                    value: 40,
                    link: [],
                  },
                  {
                    name: 'NODE JS',
                    value: 40,
                    link: [],
                  },
                  {
                    name: 'FLUTTER',
                    value: 40,
                    link: [],
                  },
                ],
              },
            ],
          },

          {
            name: 'Reseau',

            children: [
              {
                name: 'Networking',
                value: 40,
              },
              {
                name: 'Cablage',
                value: 40,
              },
              {
                name: 'Smtp',
                value: 40,
              },
            ],
          },
          {
            name: 'Cyber Sécurité',
            children: [
              {
                name: 'Offensive',
                value: 40,
              },
              {
                name: 'Deffensive',
                value: 40,
              },
            ],
          },
        ],
      },
      {},
    ]);

    series.set('selectedDataItem', series.dataItems[0]);
  }
}
