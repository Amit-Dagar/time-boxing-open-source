// type string and its required
exports.stringRequired = { type: String, required: true };

// string default empty string
exports.stringDefaultEmpty = { type: String, default: "" };

// string default null
exports.stringDefaultNull = { type: String, default: null };

// string uqique
exports.stringUnique = { type: String, unique: true };

// type Number and its required
exports.numberRequired = { type: Number, required: true };

// type number default zero
exports.numberDefaultZero = { type: Number, default: 0 };

// type boolean default false
exports.booleanDefaultFalse = { type: Boolean, default: false };

// type boolean default true
exports.booleanDefaultTrue = { type: Boolean, default: true };

// date now
exports.dateNow = { type: Date, default: Date.now };

// number index
exports.numberIndex = { type: Number, index: true };

// string index
exports.stringRequiredIndex = { type: String, index: true, required: true };
