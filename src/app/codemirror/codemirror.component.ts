import { Component, OnInit } from '@angular/core';

const defaults = {
  markdown:
    '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
  'text/typescript':
    `const component = {
  name: "@ctrl/ngx-codemirror",
  author: "Scott Cooper",
  repo: "https://github.com/typectrl/ngx-codemirror"
};
const hello: string = 'world';`,
};


@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent implements OnInit {
  readOnly = false;
  mode = 'javascript';
  options: any = {
    lineNumbers: true,
    theme: 'material',
    mode: this.mode,
  };
  defaults = defaults;
  constructor() { }

  ngOnInit(): void {
  }

  changeMode() {
    this.options = {
      ...this.options,
      mode: this.mode,
    };
  }

  handleChange($event) {
    console.log('ngModelChange', $event);
  }

  clear() {
    this.defaults[this.mode] = '';
  }

}
