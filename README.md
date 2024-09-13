## Routes

- Component tuong ung: ng g c pages/ten_page
- Them { path: '', component: }trong app.routes : [] //path ko dc bat dau bang / (slash)
- app.component.html: <router-outlet></router-outlet>

## Tach Component: ng g c components/ten_component

- Header
- Imports [ten_component]
- Su dung selector: app-header trong .html

## Tach Layout: Client (header, footer), Admin (Sidebar)

- ng g c layouts/client-layout
- RouterLink - import, thay the a href = a routerLink

## Data binding

- Gắn kết giá trị: {{pageTitle}}
- Gắn kết thuộc tính: <img [src]='product.imageUrl'>

# Show ProductList

- NgFor (import NgFor): \*ngFor="let item of list"
