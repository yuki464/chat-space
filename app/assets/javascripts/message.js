$(function(){
  function buildHTML(message){
    if (message.image){
      let html =`
      <div class="Main__main__chat">
        <div class="Main__main__chat__name">
          ${message.user_name}
          <div class="date">
            ${message.created_at}
              </div>
                </div>
                  <div class="Main__main__chat__message">
                      <p class="Main__main__chat__message__content">
                          ${message.content}
                      </p>
                        <img class="Main__main_message__image" src="${message.image}">
                          </div>`
      return html;
    }
    else{
      let html =`
      <div class="Main__main__chat">
        <div class="Main__main__chat__name">
          ${message.user_name}
            <div class="date">
              ${message.created_at}
          </div>
            </div>
              <div class="Main__main__chat__message">
                  <p class="Main__main__chat__message__content">
                    ${message.content}
                  </p>
                        </div>`
      return html;
    };
  }

  $('.Main__footer__form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url:  url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main__main').append(html);
      $('.Main__footer__form')[0].reset();
      $('.Main__main').animate({scrollTop: $('.Main__main')[0].scrollHeight});
      $('.Main__footer__form__send').prop('disabled',false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});