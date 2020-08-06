import { Injectable } from '@angular/core';
import { navItems } from './../_nav';
import { INavData } from '@coreui/angular';
import { Observable, of } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  items$: Observable<INavData[]>;
  role: string;
  decoded: any;
  private navItems = navItems;
  constructor() { 
    this.items$ = this.getNavItemsByRole();
  }
  getNavItemsByRole(): Observable<INavData[]> {
    const token = localStorage.getItem('token');
    // tslint:disable-next-line: triple-equals
    if (token != null && token != undefined) {
      this.decoded = jwt_decode(token);
      this.role = this.decoded.data.role;
    }

    if (this.role === 'superAdmin') {
      const filtredItems = this.navItems.filter((item) => {
        return (
          item.url === '/dashboard' ||
          item.url === '/superadmin/listetablissement' ||
          item.url === '/Setting'
        );
      });
      return of(filtredItems);
    }
    if (this.role === 'etablisement') {
      const filtredItems = navItems.filter((item)=>{
        return (
          item.url === '/dashboard' ||
          item.name === 'Etablissement' ||
          item.url === '/Settingetab'
        );
      });
      return of(filtredItems);
    }
    if (this.role === 'condidat') {
      const filtredItems = navItems.filter((item)=>{
        return (
          item.url === '/dashboard' 

        );
      })
    }
    // if (this.role === 'admin') {
    //   const filtredItems = this.navItems.filter((item) => {
    //     return (
    //       item.url === '/home/dashboard' ||
    //       item.name === 'Socièté' ||
    //       item.name === 'User'
    //     );
    //   });
    //   const produitMenu = this.navItems.filter(
    //     (item) => item.name === 'Produit'
    //   );
    //   if (
    //     produitMenu != null &&
    //     produitMenu !== undefined &&
    //     produitMenu.length > 0
    //   ) {
    //     const newMenuproduit: INavData[] = produitMenu[0].children.filter(
    //       (item) => {
    //         return item.url === '/home/produit/listproduit';
    //       }
    //     );
    //     filtredItems.push(newMenuproduit[0]);
    //   }
    //   const CategorieMenu = this.navItems.filter(
    //     (item) => item.name === 'Categorie'
    //   );
    //   if (
    //     CategorieMenu != null &&
    //     CategorieMenu !== undefined &&
    //     CategorieMenu.length > 0
    //   ) {
    //     const newMenuCategorie: INavData[] = CategorieMenu[0].children.filter(
    //       (item) => {
    //         return item.url === '/home/categorie/listcategorie';
    //       }
    //     );
    //     filtredItems.push(newMenuCategorie[0]);
    //   }
    //   const FournisseurMenu = this.navItems.filter(
    //     (item) => item.name === 'Fournisseur'
    //   );
    //   if (
    //     FournisseurMenu != null &&
    //     FournisseurMenu !== undefined &&
    //     FournisseurMenu.length > 0
    //   ) {
    //     const newMenuFournisseur: INavData[] = FournisseurMenu[0].children.filter(
    //       (item) => {
    //         return item.url === '/home/fournisseur/list-fournisseur';
    //       }
    //     );
    //     filtredItems.push(newMenuFournisseur[0]);
    //   }
    //   return of(filtredItems);
    // }
    // if (this.role === 'user') {
    //   const filtredItems = this.navItems.filter((item) => {
    //     return (
    //       item.url === '/home/dashboard' ||
    //       item.name === 'Produit' ||
    //       item.name === 'Categorie' ||
    //       item.name === 'Fournisseur'
    //     );
    //   });
    //   return of(filtredItems);
    // }
  }
  reloadNavItem() {
    this.items$ = this.getNavItemsByRole();
  }
}
