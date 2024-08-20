import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crew-lists',
  templateUrl: './crew-lists.component.html',
  styleUrls: ['./crew-lists.component.css']
})
export class CrewListsComponent {
  @Input() crewMembers = [
    { name: 'Michael Sarnoski', roles: ['Director', 'Screenplay', 'Story'] },
    { name: 'Scott Beck', roles: ['Characters'] },
    { name: 'Bryan Woods', roles: ['Characters'] }
  ];
}
