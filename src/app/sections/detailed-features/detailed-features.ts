import { Component} from '@angular/core';
import { FeatureItem } from './models/feature-item';
import { FEATURE_DATA } from './models/feature-data';
import { CommonModule } from '@angular/common';
import { FeaturesItems } from './features-items/features-items';

@Component({
  selector: 'app-detailed-features',
  imports: [CommonModule, FeaturesItems],
  templateUrl: './detailed-features.html',
  styles: ``
})
export class DetailedFeatures {
  features: FeatureItem[] = FEATURE_DATA;
}
  