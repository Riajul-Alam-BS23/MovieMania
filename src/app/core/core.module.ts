import { NgModule } from "@angular/core";
import { LayoutModule } from "./shell/layout/layout.module";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    imports: [
        LayoutModule
    ],
    exports: [
        BrowserModule,
        LayoutModule
    ],
    providers: [
    ],
})
export class CoreModule{}