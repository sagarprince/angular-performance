import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CellResult' })
export class ResultPipe implements PipeTransform {
  transform(value: number): string {
    return (value > -1 ? (value >= 4 ? 'Good' : (value > 2 ? 'Weak' : 'Bad')) : '').toLowerCase();
  }
}

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit, OnChanges {
  @Input() num: number = 0;
  @Input() show: boolean = false;
  result: number = -1;
  
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.show.currentValue && this.result === -1) {
      setTimeout(() => {
        this.onClick();
      }, 2)
    }
    if (!changes.show.currentValue) {
      this.result = -1;
    }
  }

  onClick(): void {
    this.result = Math.round(Math.random() * 5) + 1;
    this.cd.detectChanges();
  }

}
