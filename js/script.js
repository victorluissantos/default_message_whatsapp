function add_tag(val) {
	if (val != '') {
		let textarea = $('#text_message').val()
		let input = $('txt_msg').val()

		textarea += '{'+val.toLowerCase()+'}'
		input += '{'+val.toLowerCase()+'}'
		$('#text_message').val(textarea)
		$('txt_msg').val(input)
		$('#textarea').focus()
	}
}