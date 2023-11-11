function Validacion() {

	usuario=document.getElementById("usuario").value;
	contraseña=document.getElementById("contraseña").value;

	if(usuario=="Admin" && contraseña=="glassescraft")
	{
		alert("Entraste como Administrador");
		formulario=document.getElementById("form1");
		formulario.setAttribute("ACTION","Guia Minecraft.html");
		document.form1.submit();
	}
	else if (usuario=="user" && contraseña=="user1234")
	{
		alert("Ingresaste como Usuario")
		formulario=document.getElementById("form1");
		formulario.setAttribute("ACTION","Guia Minecraft.html");
		document.form1.submit();
	}
	else
	{
		alert("Intente Nuevamente");
	}
}
