import { Component, Input } from '@angular/core';
import { FeatureItem } from '../models/feature-item';

@Component({
  selector: 'app-features-items',
  imports: [],
  templateUrl: './features-items.html',
  styles: ``
})
export class FeaturesItems {
  @Input() feature: FeatureItem | null = null;

}
