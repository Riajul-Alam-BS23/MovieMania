import { RouterModule, Routes } from "@angular/router";
import { MovieComponent } from "./movie.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "movie",
        component: MovieComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }