const FormatCurrency = (value) => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(value);
};

const FormatCEP = (value) => {
	if (value === null) {
		return '00000-000';
	}
	let val = value.toString().trim();

	val = val.replace(/^(\d{5})(\d)/, '$1-$2');
	return val;
};

const FormatFilterURL = (filterValues) => {
	let query = '';

	if (filterValues.propertyType.length > 0) {
		query = `&tipo=${filterValues.propertyType.filter(Boolean).join(',')}`;
	}

	if (filterValues.price.length > 0) {
		query = `${query}&valor=${filterValues.price
			.filter(Boolean)
			.join(',')}`;
	}

	return query;
};

const FormatPhone = (phone) => {
	if (typeof phone !== 'string') {
		return;
	}
	let auxPhone = phone;

	if (phone.length <= 15) {
		auxPhone = auxPhone.replace(/\D/g, '');
		auxPhone = auxPhone.replace(/^(\d{2})(\d)/g, '($1) $2');
		auxPhone = auxPhone.replace(/(\d)(\d{4})$/, '$1-$2');
	}

	return auxPhone.substring(0, 15);
};

const AbrevState = (value) => {
	let data;
	switch (value.toLowerCase()) {
		case 'acre':
			data = 'AC';
			break;
		case 'alagoas':
			data = 'AL';
			break;
		case 'amazonas':
			data = 'AM';
			break;
		case 'amapa':
			data = 'AP';
			break;
		case 'bahia':
			data = 'BA';
			break;
		case 'ceara':
			data = 'CE';
			break;
		case 'distrito federal':
			data = 'DF';
			break;
		case 'espirito santo':
			data = 'ES';
			break;
		case 'goias':
			data = 'GO';
			break;
		case 'maranhao':
			data = 'MA';
			break;
		case 'minas gerais':
			data = 'MG';
			break;
		case 'mato grosso do sul':
			data = 'MS';
			break;
		case 'mato grosso':
			data = 'MT';
			break;
		case 'para':
			data = 'PA';
			break;
		case 'paraiba':
			data = 'PB';
			break;
		case 'pernambuco':
			data = 'PE';
			break;
		case 'paraná':
			data = 'PR';
			break;
		case 'rio de janeiro':
			data = 'RJ';
			break;
		case 'rio grande do norte':
			data = 'RN';
			break;
		case 'rondonia':
			data = 'RO';
			break;
		case 'roraima':
			data = 'RR';
			break;
		case 'rio grande do sul':
			data = 'RS';
			break;
		case 'santa catarina':
			data = 'SC';
			break;
		case 'sergipe':
			data = 'SE';
			break;
		case 'são paulo':
			data = 'SP';
			break;
		case 'tocantins':
			data = 'TO';
			break;
		default:
			data = 'RS';
			break;
	}
	return data;
};

export { AbrevState, FormatCEP, FormatCurrency, FormatFilterURL, FormatPhone };
