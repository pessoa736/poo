import { curso, disableDebug, enableDebug, getfuncionario, searchIndexfuncionario, show_all_bancos } from "./ambiente_do_sistema_desevolvido.js";
import { cadastro_de_todos_alunos, init_banco } from "./bancos/geral.js";

enableDebug()

init_banco()

var Diretor = getfuncionario( searchIndexfuncionario( "000.000.000-00" ) )

cadastro_de_todos_alunos(Diretor)

var professor_careca = getfuncionario( searchIndexfuncionario( "101.010.101-01" ) )

show_all_bancos()