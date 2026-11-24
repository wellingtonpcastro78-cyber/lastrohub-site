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

/* Teste de 1 minuto: nada é enviado; o cálculo acontece só no navegador. */
(function () {
  var form = document.querySelector(".teste");
  if (!form) return;
  var res = form.querySelector(".teste__resultado");
  var simEl = form.querySelector("[data-teste='sim']");
  var msgEl = form.querySelector("[data-teste='msg']");
  var cta = form.querySelector("[data-teste='cta']");
  form.addEventListener("change", function () {
    var total = 0, sim = 0;
    for (var i = 1; i <= 5; i++) {
      var r = form.querySelector("input[name='q" + i + "']:checked");
      if (r) { total++; if (r.value === "1") sim++; }
    }
    if (total < 5) return;
    var falta = 5 - sim;
    simEl.textContent = sim;
    if (sim === 5) {
      msgEl.textContent = "Raro. Mas quando perguntarem \"você sabia?\", a prova está numa trilha que ninguém consegue editar?";
      cta.textContent = "Quero ver na prática";
    } else if (sim >= 3) {
      msgEl.textContent = "Você enxerga parte do caminho. O que falta é justamente onde o prejuízo costuma aparecer, e onde vão perguntar: você sabia?";
      cta.textContent = "Quero ver os outros " + falta;
    } else {
      msgEl.textContent = "Seu fundo opera no escuro na maior parte do caminho. Quando o lastro falhar, a resposta para \"você sabia?\" vai ser não.";
      cta.textContent = "Quero ver os outros " + falta;
    }
    res.hidden = false;
  });
})();
