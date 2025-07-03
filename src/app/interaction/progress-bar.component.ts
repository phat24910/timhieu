import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
// export class ProgressBarComponent implements OnInit, OnChanges {
//   @Input() backgroundColor: string = '#ccc';
//   @Input() progressColor: string = 'tomato';
//   @Input() progress = 10;
//   @Output() completed = new EventEmitter<void>();

//   constructor() {}

//   ngOnChanges(changes: SimpleChanges) {
//     if ('progress' in changes) {
//       if (typeof changes['progress'].currentValue !== 'number') {
//         const progress = Number(changes['progress'].currentValue);
//         if (Number.isNaN(progress)) {
//           this.progress = 10;
//         } else {
//           this.progress = progress;
//         }
//       }
//       if (this.progress >= 100) {
//         this.completed.emit();
//       }
//     }
//   }

//   ngOnInit() {}
// }



export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = '#ccc';
  @Input() progressColor: string = 'orange';

  private _progress = 10;
  @Input()
  set progress(value: number) {
    const progress = Number(value);
    if (Number.isNaN(progress)) {
      this._progress = 10;
    } else {
      this._progress = progress;
    }
    if (this._progress >= 100) {
      this.completed.emit();
    }
  }
  get progress(): number {
    return this._progress;
  }
  @Output() completed = new EventEmitter<void>();

  constructor() {}
  ngOnInit() {}
}
