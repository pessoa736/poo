import { curso, disableDebug, enableDebug, Get_numero_de_alunos, getAlunos, getfuncionario, searchIndexfuncionario, show_all_bancos } from "./ambiente_do_sistema_desevolvido.js";
import { cadastro_de_todos_alunos, init_banco } from "./bancos/geral.js";



init_banco()

var Diretor = getfuncionario( searchIndexfuncionario( "000.000.000-00" ) )

enableDebug()
cadastro_de_todos_alunos(Diretor)
disableDebug()

var professor_careca = getfuncionario( searchIndexfuncionario( "101.010.101-01" ) )

show_all_bancos()