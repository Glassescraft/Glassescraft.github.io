function Validacion() {

	usuario=document.getElementById("usuario").value;
	contraseña=document.getElementById("contraseña").value;

	if(usuario=="Admin" && contraseña=="glassescraft")
	{
		alert("Entraste como Administrador");
		formulario=document.getElementById("form1");
		formulario.setAttribute("ACTION","index.html");
		document.form1.submit();
	}
	else if (usuario!="" && contraseña!="")
	{
		alert("Ingresaste como Usuario")
		formulario=document.getElementById("form1");
		formulario.setAttribute("ACTION","index.html");
		document.form1.submit();
	}
	
}
