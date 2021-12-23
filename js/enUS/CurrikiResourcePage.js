
// Search //

async function searchCurrikiResource($formFilters, success, error) {
	var filters = searchCurrikiResourceFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchCurrikiResourceVals(filters, success, error);
}

function searchCurrikiResourceFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterResourceId = $formFilters.find('.valueResourceId').val();
		if(filterResourceId != null && filterResourceId !== '')
			filters.push({ name: 'fq', value: 'resourceId:' + filterResourceId });

		var filterKeywordsStr = $formFilters.find('.valueKeywordsStr').val();
		if(filterKeywordsStr != null && filterKeywordsStr !== '')
			filters.push({ name: 'fq', value: 'keywordsStr:' + filterKeywordsStr });

		var filterKeywords = $formFilters.find('.valueKeywords').val();
		if(filterKeywords != null && filterKeywords !== '')
			filters.push({ name: 'fq', value: 'keywords:' + filterKeywords });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });
	}
	return filters;
}

function searchCurrikiResourceVals(filters, success, error) {
	$.ajax({
		url: '/api/resource?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestCurrikiResourceObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-file ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchCurrikiResourceVals($formFilters, success, error);
}

// PATCH //

async function patchCurrikiResource($formFilters, $formValues, pk, success, error) {
	var filters = patchCurrikiResourceFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueResourceId = $formValues.find('.valueResourceId').val();
	var removeResourceId = $formValues.find('.removeResourceId').val() === 'true';
	var setResourceId = removeResourceId ? null : $formValues.find('.setResourceId').val();
	var addResourceId = $formValues.find('.addResourceId').val();
	if(removeResourceId || setResourceId != null && setResourceId !== '')
		vals['setResourceId'] = setResourceId;
	if(addResourceId != null && addResourceId !== '')
		vals['addResourceId'] = addResourceId;
	var removeResourceId = $formValues.find('.removeResourceId').val();
	if(removeResourceId != null && removeResourceId !== '')
		vals['removeResourceId'] = removeResourceId;

	var valueKeywordsStr = $formValues.find('.valueKeywordsStr').val();
	var removeKeywordsStr = $formValues.find('.removeKeywordsStr').val() === 'true';
	var setKeywordsStr = removeKeywordsStr ? null : $formValues.find('.setKeywordsStr').val();
	var addKeywordsStr = $formValues.find('.addKeywordsStr').val();
	if(removeKeywordsStr || setKeywordsStr != null && setKeywordsStr !== '')
		vals['setKeywordsStr'] = setKeywordsStr;
	if(addKeywordsStr != null && addKeywordsStr !== '')
		vals['addKeywordsStr'] = addKeywordsStr;
	var removeKeywordsStr = $formValues.find('.removeKeywordsStr').val();
	if(removeKeywordsStr != null && removeKeywordsStr !== '')
		vals['removeKeywordsStr'] = removeKeywordsStr;

	var valueKeywords = $formValues.find('.valueKeywords').val();
	var removeKeywords = $formValues.find('.removeKeywords').val() === 'true';
	var setKeywords = removeKeywords ? null : $formValues.find('.setKeywords').val();
	var addKeywords = $formValues.find('.addKeywords').val();
	if(removeKeywords || setKeywords != null && setKeywords !== '')
		vals['setKeywords'] = setKeywords;
	if(addKeywords != null && addKeywords !== '')
		vals['addKeywords'] = addKeywords;
	var removeKeywords = $formValues.find('.removeKeywords').val();
	if(removeKeywords != null && removeKeywords !== '')
		vals['removeKeywords'] = removeKeywords;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchCurrikiResourceVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchCurrikiResourceFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterResourceId = $formFilters.find('.valueResourceId').val();
		if(filterResourceId != null && filterResourceId !== '')
			filters.push({ name: 'fq', value: 'resourceId:' + filterResourceId });

		var filterKeywordsStr = $formFilters.find('.valueKeywordsStr').val();
		if(filterKeywordsStr != null && filterKeywordsStr !== '')
			filters.push({ name: 'fq', value: 'keywordsStr:' + filterKeywordsStr });

		var filterKeywords = $formFilters.find('.valueKeywords').val();
		if(filterKeywords != null && filterKeywords !== '')
			filters.push({ name: 'fq', value: 'keywords:' + filterKeywords });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });
	}
	return filters;
}

function patchCurrikiResourceVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchCurrikiResourceVals(filters, vals, success, error);
}

function patchCurrikiResourceVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/resource?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postCurrikiResource($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueResourceId = $formValues.find('.valueResourceId').val();
	if(valueResourceId != null && valueResourceId !== '')
		vals['resourceId'] = valueResourceId;

	var valueKeywordsStr = $formValues.find('.valueKeywordsStr').val();
	if(valueKeywordsStr != null && valueKeywordsStr !== '')
		vals['keywordsStr'] = valueKeywordsStr;

	var valueKeywords = $formValues.find('.valueKeywords').val();
	if(valueKeywords != null && valueKeywords !== '')
		vals['keywords'] = valueKeywords;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/resource'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postCurrikiResourceVals(vals, success, error) {
	$.ajax({
		url: '/api/resource'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportCurrikiResource($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportCurrikiResourceVals(JSON.parse(json), success, error);
}

function putimportCurrikiResourceVals(json, success, error) {
	$.ajax({
		url: '/api/resource/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketCurrikiResource(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketCurrikiResource', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#CurrikiResourceForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-file w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify resources in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});
	}
}
async function websocketCurrikiResourceInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchCurrikiResourceVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputCurrikiResource' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputCurrikiResource' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputCurrikiResource' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputCurrikiResource' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputCurrikiResource' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputCurrikiResource' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Deleted'));
			}
			var val = o['resourceId'];
			if(vars.includes('resourceId')) {
				$('.inputCurrikiResource' + pk + 'ResourceId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ResourceId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ResourceId'));
			}
			var val = o['keywordsStr'];
			if(vars.includes('keywordsStr')) {
				$('.inputCurrikiResource' + pk + 'KeywordsStr').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'KeywordsStr').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'KeywordsStr'));
			}
			var val = o['keywords'];
			if(vars.includes('keywords')) {
				$('.inputCurrikiResource' + pk + 'Keywords').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Keywords').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Keywords'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputCurrikiResource' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputCurrikiResource' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputCurrikiResource' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputCurrikiResource' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ClassSimpleName'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputCurrikiResource' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputCurrikiResource' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputCurrikiResource' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputCurrikiResource' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputCurrikiResource' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputCurrikiResource' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputCurrikiResource' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputCurrikiResource' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'PageUrlPk'));
			}
		});
	}
}
