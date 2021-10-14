
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule],
    exports: [FooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FooterModule { }