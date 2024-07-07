using { sap.capire.bookshop as my } from '../db/data-model';

//@(requires:'admin', path:'/admin')
service AdminService  {
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;

    action someAction(ID: String(10)) returns String;
}