import { WFMComponent } from "../framework";

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: "app-root",
  template: `
    <div><h4>App Component work</h4></div>
    `,
});