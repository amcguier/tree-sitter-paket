module.exports = grammar({
  name: 'PAKET',

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => choice($._paket_dependency,$._paket_references,$._paket_lock),
    _paket_dependency: $ => repeat($._definition),
    _paket_references: $ => repeat($._reference_statement),
    _paket_lock: $ => repeat($._definition),
    _definition: $ => 'hello',
    _reference_statement: $ => choice($._reference_group,$._reference_definition),
    _group_name: $ => /[a-zA-Z0-9_\-\.]+/,
    _reference_group: $ => seq('group',$._group_name),
    _definition_name:$ =>  /[a-zA-Z0-9_\-\.]+/,
    _reference_definition: $ => $._definition_name
  }
});
