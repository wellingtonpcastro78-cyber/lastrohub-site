/* =========================================================
   CONFIGURAÇÃO DE CONTATO — ÚNICO LUGAR PARA EDITAR
   ---------------------------------------------------------
   1) EMAIL: troque pelo e-mail comercial quando ele existir.
   2) AGENDA: cole entre as aspas o link da página de
      agendamento do Google Agenda. Enquanto estiver vazio,
      o botão "Agendar demonstração" abre um e-mail.
   Depois de editar, salve o arquivo. O site se atualiza em
   cerca de 1 minuto.
   ========================================================= */
var LASTROHUB_CONTATO = {
  EMAIL: "contato@lastrohub.app.br",
  AGENDA: ""
};

/* ---------- Não é preciso editar daqui para baixo ---------- */
(function () {
  var c = LASTROHUB_CONTATO;
  var assunto = encodeURIComponent("Demonstração da LastroHub");
  var corpo = encodeURIComponent(
    "Olá, gostaria de agendar uma demonstração da LastroHub.\n\nNome:\nEmpresa:\nPerfil (FIDC, cedente ou transportadora):\nTelefone:\n"
  );
  var mailtoDemo = "mailto:" + c.EMAIL + "?subject=" + assunto + "&body=" + corpo;
  var mailtoComercial = "mailto:" + c.EMAIL + "?subject=" + encodeURIComponent("Contato comercial — LastroHub");

  document.querySelectorAll("[data-acao='agendar']").forEach(function (el) {
    if (c.AGENDA) {
      el.href = c.AGENDA;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.href = mailtoDemo;
    }
  });
  document.querySelectorAll("[data-acao='comercial']").forEach(function (el) {
    el.href = mailtoComercial;
  });
  document.querySelectorAll("[data-acao='email']").forEach(function (el) {
    el.href = "mailto:" + c.EMAIL;
    el.textContent = c.EMAIL;
  });

  /* Se o computador não tiver programa de e-mail configurado, o link
     mailto não abre nada. Por isso copiamos o endereço e mostramos
     um aviso discreto com o e-mail. */
  var aviso = null, temporizador = null;
  function mostrarAviso(copiado) {
    if (!aviso) {
      aviso = document.createElement("div");
      aviso.className = "aviso-email";
      aviso.setAttribute("role", "status");
      document.body.appendChild(aviso);
    }
    aviso.innerHTML = "Se o seu e-mail não abriu, escreva para <b>" + c.EMAIL + "</b>." +
      (copiado ? " Copiamos o endereço para você." : "") +
      ' <button type="button">Fechar</button>';
    aviso.querySelector("button").onclick = function () { aviso.classList.remove("visivel"); };
    aviso.classList.add("visivel");
    clearTimeout(temporizador);
    temporizador = setTimeout(function () { aviso.classList.remove("visivel"); }, 9000);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[href^='mailto:']") : null;
    if (!a) return;
    var copiar = navigator.clipboard && navigator.clipboard.writeText ?
      navigator.clipboard.writeText(c.EMAIL).then(function () { return true; }, function () { return false; }) :
      Promise.resolve(false);
    setTimeout(function () { copiar.then(mostrarAviso); }, 700);
  });

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
