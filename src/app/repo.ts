export class Repo {
    repoID: number;
    repoName: string;
    repoURL: string;
    repoDescr: string;
    repoCreationDate: string;
    repoLang: string;
    repoHomepage: string;

    constructor(){
        this.repoID=0;
        this.repoName="";
        this.repoURL="";
        this.repoCreationDate="";
        this.repoDescr="";
        this.repoLang="";
        this.repoHomepage="";
    }
}
