export class Post { 
    id: number;
    titre : string;
    contenu : string;

    constructor(id: number , titre: string, contenu: string) {
      this.id= id;
      this.titre = titre;
      this.contenu = contenu;
    }
    
 }