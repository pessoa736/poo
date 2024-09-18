import { banco, contaCorrente, contaPoupança } from "./ambiente.js";



var Itau = new banco()

var conta_corente  =   new contaCorrente("Odiofonsales")
var conta_poupanca =   new contaPoupança("Odiofonsales2")



conta_corente.calcular_taxa()
conta_poupanca.geraJuros()


Itau.show_all_titulares()