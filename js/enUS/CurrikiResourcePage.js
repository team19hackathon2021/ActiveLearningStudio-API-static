
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

		var filterLicenseId = $formFilters.find('.valueLicenseId').val();
		if(filterLicenseId != null && filterLicenseId !== '')
			filters.push({ name: 'fq', value: 'licenseId:' + filterLicenseId });

		var filterContributorId = $formFilters.find('.valueContributorId').val();
		if(filterContributorId != null && filterContributorId !== '')
			filters.push({ name: 'fq', value: 'contributorId:' + filterContributorId });

		var filterContributionDate = $formFilters.find('.valueContributionDate').val();
		if(filterContributionDate != null && filterContributionDate !== '')
			filters.push({ name: 'fq', value: 'contributionDate:' + filterContributionDate });

		var filterDescription = $formFilters.find('.valueDescription').val();
		if(filterDescription != null && filterDescription !== '')
			filters.push({ name: 'fq', value: 'description:' + filterDescription });

		var filterTitle = $formFilters.find('.valueTitle').val();
		if(filterTitle != null && filterTitle !== '')
			filters.push({ name: 'fq', value: 'title:' + filterTitle });

		var filterKeywords = $formFilters.find('.valueKeywords').val();
		if(filterKeywords != null && filterKeywords !== '')
			filters.push({ name: 'fq', value: 'keywords:' + filterKeywords });

		var filterGeneratedKeywords = $formFilters.find('.valueGeneratedKeywords').val();
		if(filterGeneratedKeywords != null && filterGeneratedKeywords !== '')
			filters.push({ name: 'fq', value: 'generatedKeywords:' + filterGeneratedKeywords });

		var filterLanguage = $formFilters.find('.valueLanguage').val();
		if(filterLanguage != null && filterLanguage !== '')
			filters.push({ name: 'fq', value: 'language:' + filterLanguage });

		var filterLastEditorId = $formFilters.find('.valueLastEditorId').val();
		if(filterLastEditorId != null && filterLastEditorId !== '')
			filters.push({ name: 'fq', value: 'lastEditorId:' + filterLastEditorId });

		var filterLastEditDate = $formFilters.find('.valueLastEditDate').val();
		if(filterLastEditDate != null && filterLastEditDate !== '')
			filters.push({ name: 'fq', value: 'lastEditDate:' + filterLastEditDate });

		var filterCurrikiLicense = $formFilters.find('.valueCurrikiLicense').val();
		if(filterCurrikiLicense != null && filterCurrikiLicense !== '')
			filters.push({ name: 'fq', value: 'currikiLicense:' + filterCurrikiLicense });

		var filterExternalUrl = $formFilters.find('.valueExternalUrl').val();
		if(filterExternalUrl != null && filterExternalUrl !== '')
			filters.push({ name: 'fq', value: 'externalUrl:' + filterExternalUrl });

		var filterResourceChecked = $formFilters.find('.valueResourceChecked').val();
		if(filterResourceChecked != null && filterResourceChecked !== '')
			filters.push({ name: 'fq', value: 'resourceChecked:' + filterResourceChecked });

		var filterResourceCheckDate = $formFilters.find('.valueResourceCheckDate').val();
		if(filterResourceCheckDate != null && filterResourceCheckDate !== '')
			filters.push({ name: 'fq', value: 'resourceCheckDate:' + filterResourceCheckDate });

		var filterResourceCheckId = $formFilters.find('.valueResourceCheckId').val();
		if(filterResourceCheckId != null && filterResourceCheckId !== '')
			filters.push({ name: 'fq', value: 'resourceCheckId:' + filterResourceCheckId });

		var filterStudentFacing = $formFilters.find('.valueStudentFacing').val();
		if(filterStudentFacing != null && filterStudentFacing !== '')
			filters.push({ name: 'fq', value: 'studentFacing:' + filterStudentFacing });

		var filterSource = $formFilters.find('.valueSource').val();
		if(filterSource != null && filterSource !== '')
			filters.push({ name: 'fq', value: 'source:' + filterSource });

		var filterReviewStatus = $formFilters.find('.valueReviewStatus').val();
		if(filterReviewStatus != null && filterReviewStatus !== '')
			filters.push({ name: 'fq', value: 'reviewStatus:' + filterReviewStatus });

		var filterLastReviewDate = $formFilters.find('.valueLastReviewDate').val();
		if(filterLastReviewDate != null && filterLastReviewDate !== '')
			filters.push({ name: 'fq', value: 'lastReviewDate:' + filterLastReviewDate });

		var filterReviewByID = $formFilters.find('.valueReviewByID').val();
		if(filterReviewByID != null && filterReviewByID !== '')
			filters.push({ name: 'fq', value: 'reviewByID:' + filterReviewByID });

		var filterReviewRating = $formFilters.find('.valueReviewRating').val();
		if(filterReviewRating != null && filterReviewRating !== '')
			filters.push({ name: 'fq', value: 'reviewRating:' + filterReviewRating });

		var filterTechnicalCompleteness = $formFilters.find('.valueTechnicalCompleteness').val();
		if(filterTechnicalCompleteness != null && filterTechnicalCompleteness !== '')
			filters.push({ name: 'fq', value: 'technicalCompleteness:' + filterTechnicalCompleteness });

		var filterContentAccuracy = $formFilters.find('.valueContentAccuracy').val();
		if(filterContentAccuracy != null && filterContentAccuracy !== '')
			filters.push({ name: 'fq', value: 'contentAccuracy:' + filterContentAccuracy });

		var filterPedagogy = $formFilters.find('.valuePedagogy').val();
		if(filterPedagogy != null && filterPedagogy !== '')
			filters.push({ name: 'fq', value: 'pedagogy:' + filterPedagogy });

		var filterStandardsAlignment = $formFilters.find('.valueStandardsAlignment').val();
		if(filterStandardsAlignment != null && filterStandardsAlignment !== '')
			filters.push({ name: 'fq', value: 'standardsAlignment:' + filterStandardsAlignment });

		var filterStandardsAlignmentComment = $formFilters.find('.valueStandardsAlignmentComment').val();
		if(filterStandardsAlignmentComment != null && filterStandardsAlignmentComment !== '')
			filters.push({ name: 'fq', value: 'standardsAlignmentComment:' + filterStandardsAlignmentComment });

		var filterSubjectMatter = $formFilters.find('.valueSubjectMatter').val();
		if(filterSubjectMatter != null && filterSubjectMatter !== '')
			filters.push({ name: 'fq', value: 'subjectMatter:' + filterSubjectMatter });

		var filterSubjectMatterComment = $formFilters.find('.valueSubjectMatterComment').val();
		if(filterSubjectMatterComment != null && filterSubjectMatterComment !== '')
			filters.push({ name: 'fq', value: 'subjectMatterComment:' + filterSubjectMatterComment });

		var filterSupportsTeaching = $formFilters.find('.valueSupportsTeaching').val();
		if(filterSupportsTeaching != null && filterSupportsTeaching !== '')
			filters.push({ name: 'fq', value: 'supportsTeaching:' + filterSupportsTeaching });

		var filterSupportsTeachingComment = $formFilters.find('.valueSupportsTeachingComment').val();
		if(filterSupportsTeachingComment != null && filterSupportsTeachingComment !== '')
			filters.push({ name: 'fq', value: 'supportsTeachingComment:' + filterSupportsTeachingComment });

		var filterAssessmentsQuality = $formFilters.find('.valueAssessmentsQuality').val();
		if(filterAssessmentsQuality != null && filterAssessmentsQuality !== '')
			filters.push({ name: 'fq', value: 'assessmentsQuality:' + filterAssessmentsQuality });

		var filterAssessmentsQualityComment = $formFilters.find('.valueAssessmentsQualityComment').val();
		if(filterAssessmentsQualityComment != null && filterAssessmentsQualityComment !== '')
			filters.push({ name: 'fq', value: 'assessmentsQualityComment:' + filterAssessmentsQualityComment });

		var filterInteractivityQuality = $formFilters.find('.valueInteractivityQuality').val();
		if(filterInteractivityQuality != null && filterInteractivityQuality !== '')
			filters.push({ name: 'fq', value: 'interactivityQuality:' + filterInteractivityQuality });

		var filterInteractivityQualityComment = $formFilters.find('.valueInteractivityQualityComment').val();
		if(filterInteractivityQualityComment != null && filterInteractivityQualityComment !== '')
			filters.push({ name: 'fq', value: 'interactivityQualityComment:' + filterInteractivityQualityComment });

		var filterInstructionalQuality = $formFilters.find('.valueInstructionalQuality').val();
		if(filterInstructionalQuality != null && filterInstructionalQuality !== '')
			filters.push({ name: 'fq', value: 'instructionalQuality:' + filterInstructionalQuality });

		var filterInstructionalQualityComment = $formFilters.find('.valueInstructionalQualityComment').val();
		if(filterInstructionalQualityComment != null && filterInstructionalQualityComment !== '')
			filters.push({ name: 'fq', value: 'instructionalQualityComment:' + filterInstructionalQualityComment });

		var filterDeeperLearning = $formFilters.find('.valueDeeperLearning').val();
		if(filterDeeperLearning != null && filterDeeperLearning !== '')
			filters.push({ name: 'fq', value: 'deeperLearning:' + filterDeeperLearning });

		var filterDeeperLearningComment = $formFilters.find('.valueDeeperLearningComment').val();
		if(filterDeeperLearningComment != null && filterDeeperLearningComment !== '')
			filters.push({ name: 'fq', value: 'deeperLearningComment:' + filterDeeperLearningComment });

		var filterPartner = $formFilters.find('.valuePartner').val();
		if(filterPartner != null && filterPartner !== '')
			filters.push({ name: 'fq', value: 'partner:' + filterPartner });

		var filterCreateDate = $formFilters.find('.valueCreateDate').val();
		if(filterCreateDate != null && filterCreateDate !== '')
			filters.push({ name: 'fq', value: 'createDate:' + filterCreateDate });

		var filterType = $formFilters.find('.valueType').val();
		if(filterType != null && filterType !== '')
			filters.push({ name: 'fq', value: 'type:' + filterType });

		var filterFeatured = $formFilters.find('.valueFeatured').val();
		if(filterFeatured != null && filterFeatured !== '')
			filters.push({ name: 'fq', value: 'featured:' + filterFeatured });

		var filterPage = $formFilters.find('.valuePage').val();
		if(filterPage != null && filterPage !== '')
			filters.push({ name: 'fq', value: 'page:' + filterPage });

		var filterActive = $formFilters.find('.valueActive').val();
		if(filterActive != null && filterActive !== '')
			filters.push({ name: 'fq', value: 'active:' + filterActive });

		var filterPublic = $formFilters.find('.valuePublic').val();
		if(filterPublic != null && filterPublic !== '')
			filters.push({ name: 'fq', value: 'Public:' + filterPublic });

		var filterXwd_id = $formFilters.find('.valueXwd_id').val();
		if(filterXwd_id != null && filterXwd_id !== '')
			filters.push({ name: 'fq', value: 'xwd_id:' + filterXwd_id });

		var filterMediaType = $formFilters.find('.valueMediaType').val();
		if(filterMediaType != null && filterMediaType !== '')
			filters.push({ name: 'fq', value: 'mediaType:' + filterMediaType });

		var filterAccess = $formFilters.find('.valueAccess').val();
		if(filterAccess != null && filterAccess !== '')
			filters.push({ name: 'fq', value: 'access:' + filterAccess });

		var filterMemberRating = $formFilters.find('.valueMemberRating').val();
		if(filterMemberRating != null && filterMemberRating !== '')
			filters.push({ name: 'fq', value: 'memberRating:' + filterMemberRating });

		var filterAligned = $formFilters.find('.valueAligned').val();
		if(filterAligned != null && filterAligned !== '')
			filters.push({ name: 'fq', value: 'aligned:' + filterAligned });

		var filterPageUrl = $formFilters.find('.valuePageUrl').val();
		if(filterPageUrl != null && filterPageUrl !== '')
			filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

		var filterIndexed = $formFilters.find('.valueIndexed').val();
		if(filterIndexed != null && filterIndexed !== '')
			filters.push({ name: 'fq', value: 'indexed:' + filterIndexed });

		var filterLastIndexDate = $formFilters.find('.valueLastIndexDate').val();
		if(filterLastIndexDate != null && filterLastIndexDate !== '')
			filters.push({ name: 'fq', value: 'lastIndexDate:' + filterLastIndexDate });

		var filterIndexRequired = $formFilters.find('.valueIndexRequired').val();
		if(filterIndexRequired != null && filterIndexRequired !== '')
			filters.push({ name: 'fq', value: 'indexRequired:' + filterIndexRequired });

		var filterIndexRequiredDate = $formFilters.find('.valueIndexRequiredDate').val();
		if(filterIndexRequiredDate != null && filterIndexRequiredDate !== '')
			filters.push({ name: 'fq', value: 'indexRequiredDate:' + filterIndexRequiredDate });

		var filterRescrape = $formFilters.find('.valueRescrape').val();
		if(filterRescrape != null && filterRescrape !== '')
			filters.push({ name: 'fq', value: 'rescrape:' + filterRescrape });

		var filterGoButton = $formFilters.find('.valueGoButton').val();
		if(filterGoButton != null && filterGoButton !== '')
			filters.push({ name: 'fq', value: 'goButton:' + filterGoButton });

		var filterDownloadButton = $formFilters.find('.valueDownloadButton').val();
		if(filterDownloadButton != null && filterDownloadButton !== '')
			filters.push({ name: 'fq', value: 'downloadButton:' + filterDownloadButton });

		var filterTopOfSearch = $formFilters.find('.valueTopOfSearch').val();
		if(filterTopOfSearch != null && filterTopOfSearch !== '')
			filters.push({ name: 'fq', value: 'topOfSearch:' + filterTopOfSearch });

		var filterRemove = $formFilters.find('.valueRemove').val();
		if(filterRemove != null && filterRemove !== '')
			filters.push({ name: 'fq', value: 'remove:' + filterRemove });

		var filterSpam = $formFilters.find('.valueSpam').val();
		if(filterSpam != null && filterSpam !== '')
			filters.push({ name: 'fq', value: 'spam:' + filterSpam });

		var filterTopOfSearchInt = $formFilters.find('.valueTopOfSearchInt').val();
		if(filterTopOfSearchInt != null && filterTopOfSearchInt !== '')
			filters.push({ name: 'fq', value: 'topOfSearchInt:' + filterTopOfSearchInt });

		var filterPartnerInt = $formFilters.find('.valuePartnerInt').val();
		if(filterPartnerInt != null && filterPartnerInt !== '')
			filters.push({ name: 'fq', value: 'partnerInt:' + filterPartnerInt });

		var filterReviewResource = $formFilters.find('.valueReviewResource').val();
		if(filterReviewResource != null && filterReviewResource !== '')
			filters.push({ name: 'fq', value: 'reviewResource:' + filterReviewResource });

		var filterOldUrl = $formFilters.find('.valueOldUrl').val();
		if(filterOldUrl != null && filterOldUrl !== '')
			filters.push({ name: 'fq', value: 'oldUrl:' + filterOldUrl });

		var filterContentDisplayOk = $formFilters.find('.valueContentDisplayOk').val();
		if(filterContentDisplayOk != null && filterContentDisplayOk !== '')
			filters.push({ name: 'fq', value: 'contentDisplayOk:' + filterContentDisplayOk });

		var filterMetadata = $formFilters.find('.valueMetadata').val();
		if(filterMetadata != null && filterMetadata !== '')
			filters.push({ name: 'fq', value: 'metadata:' + filterMetadata });

		var filterApprovalStatus = $formFilters.find('.valueApprovalStatus').val();
		if(filterApprovalStatus != null && filterApprovalStatus !== '')
			filters.push({ name: 'fq', value: 'approvalStatus:' + filterApprovalStatus });

		var filterApprovalStatusDate = $formFilters.find('.valueApprovalStatusDate').val();
		if(filterApprovalStatusDate != null && filterApprovalStatusDate !== '')
			filters.push({ name: 'fq', value: 'approvalStatusDate:' + filterApprovalStatusDate });

		var filterSpamUser = $formFilters.find('.valueSpamUser').val();
		if(filterSpamUser != null && filterSpamUser !== '')
			filters.push({ name: 'fq', value: 'spamUser:' + filterSpamUser });

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

	var valueLicenseId = $formValues.find('.valueLicenseId').val();
	var removeLicenseId = $formValues.find('.removeLicenseId').val() === 'true';
	var setLicenseId = removeLicenseId ? null : $formValues.find('.setLicenseId').val();
	var addLicenseId = $formValues.find('.addLicenseId').val();
	if(removeLicenseId || setLicenseId != null && setLicenseId !== '')
		vals['setLicenseId'] = setLicenseId;
	if(addLicenseId != null && addLicenseId !== '')
		vals['addLicenseId'] = addLicenseId;
	var removeLicenseId = $formValues.find('.removeLicenseId').val();
	if(removeLicenseId != null && removeLicenseId !== '')
		vals['removeLicenseId'] = removeLicenseId;

	var valueContributorId = $formValues.find('.valueContributorId').val();
	var removeContributorId = $formValues.find('.removeContributorId').val() === 'true';
	var setContributorId = removeContributorId ? null : $formValues.find('.setContributorId').val();
	var addContributorId = $formValues.find('.addContributorId').val();
	if(removeContributorId || setContributorId != null && setContributorId !== '')
		vals['setContributorId'] = setContributorId;
	if(addContributorId != null && addContributorId !== '')
		vals['addContributorId'] = addContributorId;
	var removeContributorId = $formValues.find('.removeContributorId').val();
	if(removeContributorId != null && removeContributorId !== '')
		vals['removeContributorId'] = removeContributorId;

	var valueContributionDate = $formValues.find('.valueContributionDate').val();
	var removeContributionDate = $formValues.find('.removeContributionDate').val() === 'true';
	var setContributionDate = removeContributionDate ? null : $formValues.find('.setContributionDate').val();
	var addContributionDate = $formValues.find('.addContributionDate').val();
	if(removeContributionDate || setContributionDate != null && setContributionDate !== '')
		vals['setContributionDate'] = setContributionDate;
	if(addContributionDate != null && addContributionDate !== '')
		vals['addContributionDate'] = addContributionDate;
	var removeContributionDate = $formValues.find('.removeContributionDate').val();
	if(removeContributionDate != null && removeContributionDate !== '')
		vals['removeContributionDate'] = removeContributionDate;

	var valueDescription = $formValues.find('.valueDescription').val();
	var removeDescription = $formValues.find('.removeDescription').val() === 'true';
	var setDescription = removeDescription ? null : $formValues.find('.setDescription').val();
	var addDescription = $formValues.find('.addDescription').val();
	if(removeDescription || setDescription != null && setDescription !== '')
		vals['setDescription'] = setDescription;
	if(addDescription != null && addDescription !== '')
		vals['addDescription'] = addDescription;
	var removeDescription = $formValues.find('.removeDescription').val();
	if(removeDescription != null && removeDescription !== '')
		vals['removeDescription'] = removeDescription;

	var valueTitle = $formValues.find('.valueTitle').val();
	var removeTitle = $formValues.find('.removeTitle').val() === 'true';
	var setTitle = removeTitle ? null : $formValues.find('.setTitle').val();
	var addTitle = $formValues.find('.addTitle').val();
	if(removeTitle || setTitle != null && setTitle !== '')
		vals['setTitle'] = setTitle;
	if(addTitle != null && addTitle !== '')
		vals['addTitle'] = addTitle;
	var removeTitle = $formValues.find('.removeTitle').val();
	if(removeTitle != null && removeTitle !== '')
		vals['removeTitle'] = removeTitle;

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

	var valueGeneratedKeywordsStr = $formValues.find('.valueGeneratedKeywordsStr').val();
	var removeGeneratedKeywordsStr = $formValues.find('.removeGeneratedKeywordsStr').val() === 'true';
	var setGeneratedKeywordsStr = removeGeneratedKeywordsStr ? null : $formValues.find('.setGeneratedKeywordsStr').val();
	var addGeneratedKeywordsStr = $formValues.find('.addGeneratedKeywordsStr').val();
	if(removeGeneratedKeywordsStr || setGeneratedKeywordsStr != null && setGeneratedKeywordsStr !== '')
		vals['setGeneratedKeywordsStr'] = setGeneratedKeywordsStr;
	if(addGeneratedKeywordsStr != null && addGeneratedKeywordsStr !== '')
		vals['addGeneratedKeywordsStr'] = addGeneratedKeywordsStr;
	var removeGeneratedKeywordsStr = $formValues.find('.removeGeneratedKeywordsStr').val();
	if(removeGeneratedKeywordsStr != null && removeGeneratedKeywordsStr !== '')
		vals['removeGeneratedKeywordsStr'] = removeGeneratedKeywordsStr;

	var valueGeneratedKeywords = $formValues.find('.valueGeneratedKeywords').val();
	var removeGeneratedKeywords = $formValues.find('.removeGeneratedKeywords').val() === 'true';
	var setGeneratedKeywords = removeGeneratedKeywords ? null : $formValues.find('.setGeneratedKeywords').val();
	var addGeneratedKeywords = $formValues.find('.addGeneratedKeywords').val();
	if(removeGeneratedKeywords || setGeneratedKeywords != null && setGeneratedKeywords !== '')
		vals['setGeneratedKeywords'] = setGeneratedKeywords;
	if(addGeneratedKeywords != null && addGeneratedKeywords !== '')
		vals['addGeneratedKeywords'] = addGeneratedKeywords;
	var removeGeneratedKeywords = $formValues.find('.removeGeneratedKeywords').val();
	if(removeGeneratedKeywords != null && removeGeneratedKeywords !== '')
		vals['removeGeneratedKeywords'] = removeGeneratedKeywords;

	var valueLanguage = $formValues.find('.valueLanguage').val();
	var removeLanguage = $formValues.find('.removeLanguage').val() === 'true';
	var setLanguage = removeLanguage ? null : $formValues.find('.setLanguage').val();
	var addLanguage = $formValues.find('.addLanguage').val();
	if(removeLanguage || setLanguage != null && setLanguage !== '')
		vals['setLanguage'] = setLanguage;
	if(addLanguage != null && addLanguage !== '')
		vals['addLanguage'] = addLanguage;
	var removeLanguage = $formValues.find('.removeLanguage').val();
	if(removeLanguage != null && removeLanguage !== '')
		vals['removeLanguage'] = removeLanguage;

	var valueLastEditorId = $formValues.find('.valueLastEditorId').val();
	var removeLastEditorId = $formValues.find('.removeLastEditorId').val() === 'true';
	var setLastEditorId = removeLastEditorId ? null : $formValues.find('.setLastEditorId').val();
	var addLastEditorId = $formValues.find('.addLastEditorId').val();
	if(removeLastEditorId || setLastEditorId != null && setLastEditorId !== '')
		vals['setLastEditorId'] = setLastEditorId;
	if(addLastEditorId != null && addLastEditorId !== '')
		vals['addLastEditorId'] = addLastEditorId;
	var removeLastEditorId = $formValues.find('.removeLastEditorId').val();
	if(removeLastEditorId != null && removeLastEditorId !== '')
		vals['removeLastEditorId'] = removeLastEditorId;

	var valueLastEditDate = $formValues.find('.valueLastEditDate').val();
	var removeLastEditDate = $formValues.find('.removeLastEditDate').val() === 'true';
	var setLastEditDate = removeLastEditDate ? null : $formValues.find('.setLastEditDate').val();
	var addLastEditDate = $formValues.find('.addLastEditDate').val();
	if(removeLastEditDate || setLastEditDate != null && setLastEditDate !== '')
		vals['setLastEditDate'] = setLastEditDate;
	if(addLastEditDate != null && addLastEditDate !== '')
		vals['addLastEditDate'] = addLastEditDate;
	var removeLastEditDate = $formValues.find('.removeLastEditDate').val();
	if(removeLastEditDate != null && removeLastEditDate !== '')
		vals['removeLastEditDate'] = removeLastEditDate;

	var valueCurrikiLicense = $formValues.find('.valueCurrikiLicense').val();
	var removeCurrikiLicense = $formValues.find('.removeCurrikiLicense').val() === 'true';
	var setCurrikiLicense = removeCurrikiLicense ? null : $formValues.find('.setCurrikiLicense').val();
	var addCurrikiLicense = $formValues.find('.addCurrikiLicense').val();
	if(removeCurrikiLicense || setCurrikiLicense != null && setCurrikiLicense !== '')
		vals['setCurrikiLicense'] = setCurrikiLicense;
	if(addCurrikiLicense != null && addCurrikiLicense !== '')
		vals['addCurrikiLicense'] = addCurrikiLicense;
	var removeCurrikiLicense = $formValues.find('.removeCurrikiLicense').val();
	if(removeCurrikiLicense != null && removeCurrikiLicense !== '')
		vals['removeCurrikiLicense'] = removeCurrikiLicense;

	var valueExternalUrl = $formValues.find('.valueExternalUrl').val();
	var removeExternalUrl = $formValues.find('.removeExternalUrl').val() === 'true';
	var setExternalUrl = removeExternalUrl ? null : $formValues.find('.setExternalUrl').val();
	var addExternalUrl = $formValues.find('.addExternalUrl').val();
	if(removeExternalUrl || setExternalUrl != null && setExternalUrl !== '')
		vals['setExternalUrl'] = setExternalUrl;
	if(addExternalUrl != null && addExternalUrl !== '')
		vals['addExternalUrl'] = addExternalUrl;
	var removeExternalUrl = $formValues.find('.removeExternalUrl').val();
	if(removeExternalUrl != null && removeExternalUrl !== '')
		vals['removeExternalUrl'] = removeExternalUrl;

	var valueResourceChecked = $formValues.find('.valueResourceChecked').val();
	var removeResourceChecked = $formValues.find('.removeResourceChecked').val() === 'true';
	var setResourceChecked = removeResourceChecked ? null : $formValues.find('.setResourceChecked').val();
	var addResourceChecked = $formValues.find('.addResourceChecked').val();
	if(removeResourceChecked || setResourceChecked != null && setResourceChecked !== '')
		vals['setResourceChecked'] = setResourceChecked;
	if(addResourceChecked != null && addResourceChecked !== '')
		vals['addResourceChecked'] = addResourceChecked;
	var removeResourceChecked = $formValues.find('.removeResourceChecked').val();
	if(removeResourceChecked != null && removeResourceChecked !== '')
		vals['removeResourceChecked'] = removeResourceChecked;

	var valueContent = $formValues.find('.valueContent').val();
	var removeContent = $formValues.find('.removeContent').val() === 'true';
	var setContent = removeContent ? null : $formValues.find('.setContent').val();
	var addContent = $formValues.find('.addContent').val();
	if(removeContent || setContent != null && setContent !== '')
		vals['setContent'] = setContent;
	if(addContent != null && addContent !== '')
		vals['addContent'] = addContent;
	var removeContent = $formValues.find('.removeContent').val();
	if(removeContent != null && removeContent !== '')
		vals['removeContent'] = removeContent;

	var valueResourceCheckRequestNote = $formValues.find('.valueResourceCheckRequestNote').val();
	var removeResourceCheckRequestNote = $formValues.find('.removeResourceCheckRequestNote').val() === 'true';
	var setResourceCheckRequestNote = removeResourceCheckRequestNote ? null : $formValues.find('.setResourceCheckRequestNote').val();
	var addResourceCheckRequestNote = $formValues.find('.addResourceCheckRequestNote').val();
	if(removeResourceCheckRequestNote || setResourceCheckRequestNote != null && setResourceCheckRequestNote !== '')
		vals['setResourceCheckRequestNote'] = setResourceCheckRequestNote;
	if(addResourceCheckRequestNote != null && addResourceCheckRequestNote !== '')
		vals['addResourceCheckRequestNote'] = addResourceCheckRequestNote;
	var removeResourceCheckRequestNote = $formValues.find('.removeResourceCheckRequestNote').val();
	if(removeResourceCheckRequestNote != null && removeResourceCheckRequestNote !== '')
		vals['removeResourceCheckRequestNote'] = removeResourceCheckRequestNote;

	var valueResourceCheckDate = $formValues.find('.valueResourceCheckDate').val();
	var removeResourceCheckDate = $formValues.find('.removeResourceCheckDate').val() === 'true';
	var setResourceCheckDate = removeResourceCheckDate ? null : $formValues.find('.setResourceCheckDate').val();
	var addResourceCheckDate = $formValues.find('.addResourceCheckDate').val();
	if(removeResourceCheckDate || setResourceCheckDate != null && setResourceCheckDate !== '')
		vals['setResourceCheckDate'] = setResourceCheckDate;
	if(addResourceCheckDate != null && addResourceCheckDate !== '')
		vals['addResourceCheckDate'] = addResourceCheckDate;
	var removeResourceCheckDate = $formValues.find('.removeResourceCheckDate').val();
	if(removeResourceCheckDate != null && removeResourceCheckDate !== '')
		vals['removeResourceCheckDate'] = removeResourceCheckDate;

	var valueResourceCheckId = $formValues.find('.valueResourceCheckId').val();
	var removeResourceCheckId = $formValues.find('.removeResourceCheckId').val() === 'true';
	var setResourceCheckId = removeResourceCheckId ? null : $formValues.find('.setResourceCheckId').val();
	var addResourceCheckId = $formValues.find('.addResourceCheckId').val();
	if(removeResourceCheckId || setResourceCheckId != null && setResourceCheckId !== '')
		vals['setResourceCheckId'] = setResourceCheckId;
	if(addResourceCheckId != null && addResourceCheckId !== '')
		vals['addResourceCheckId'] = addResourceCheckId;
	var removeResourceCheckId = $formValues.find('.removeResourceCheckId').val();
	if(removeResourceCheckId != null && removeResourceCheckId !== '')
		vals['removeResourceCheckId'] = removeResourceCheckId;

	var valueResourceCheckNote = $formValues.find('.valueResourceCheckNote').val();
	var removeResourceCheckNote = $formValues.find('.removeResourceCheckNote').val() === 'true';
	var setResourceCheckNote = removeResourceCheckNote ? null : $formValues.find('.setResourceCheckNote').val();
	var addResourceCheckNote = $formValues.find('.addResourceCheckNote').val();
	if(removeResourceCheckNote || setResourceCheckNote != null && setResourceCheckNote !== '')
		vals['setResourceCheckNote'] = setResourceCheckNote;
	if(addResourceCheckNote != null && addResourceCheckNote !== '')
		vals['addResourceCheckNote'] = addResourceCheckNote;
	var removeResourceCheckNote = $formValues.find('.removeResourceCheckNote').val();
	if(removeResourceCheckNote != null && removeResourceCheckNote !== '')
		vals['removeResourceCheckNote'] = removeResourceCheckNote;

	var valueStudentFacing = $formValues.find('.valueStudentFacing').val();
	var removeStudentFacing = $formValues.find('.removeStudentFacing').val() === 'true';
	var setStudentFacing = removeStudentFacing ? null : $formValues.find('.setStudentFacing').val();
	var addStudentFacing = $formValues.find('.addStudentFacing').val();
	if(removeStudentFacing || setStudentFacing != null && setStudentFacing !== '')
		vals['setStudentFacing'] = setStudentFacing;
	if(addStudentFacing != null && addStudentFacing !== '')
		vals['addStudentFacing'] = addStudentFacing;
	var removeStudentFacing = $formValues.find('.removeStudentFacing').val();
	if(removeStudentFacing != null && removeStudentFacing !== '')
		vals['removeStudentFacing'] = removeStudentFacing;

	var valueSource = $formValues.find('.valueSource').val();
	var removeSource = $formValues.find('.removeSource').val() === 'true';
	var setSource = removeSource ? null : $formValues.find('.setSource').val();
	var addSource = $formValues.find('.addSource').val();
	if(removeSource || setSource != null && setSource !== '')
		vals['setSource'] = setSource;
	if(addSource != null && addSource !== '')
		vals['addSource'] = addSource;
	var removeSource = $formValues.find('.removeSource').val();
	if(removeSource != null && removeSource !== '')
		vals['removeSource'] = removeSource;

	var valueReviewStatus = $formValues.find('.valueReviewStatus').val();
	var removeReviewStatus = $formValues.find('.removeReviewStatus').val() === 'true';
	var setReviewStatus = removeReviewStatus ? null : $formValues.find('.setReviewStatus').val();
	var addReviewStatus = $formValues.find('.addReviewStatus').val();
	if(removeReviewStatus || setReviewStatus != null && setReviewStatus !== '')
		vals['setReviewStatus'] = setReviewStatus;
	if(addReviewStatus != null && addReviewStatus !== '')
		vals['addReviewStatus'] = addReviewStatus;
	var removeReviewStatus = $formValues.find('.removeReviewStatus').val();
	if(removeReviewStatus != null && removeReviewStatus !== '')
		vals['removeReviewStatus'] = removeReviewStatus;

	var valueLastReviewDate = $formValues.find('.valueLastReviewDate').val();
	var removeLastReviewDate = $formValues.find('.removeLastReviewDate').val() === 'true';
	var setLastReviewDate = removeLastReviewDate ? null : $formValues.find('.setLastReviewDate').val();
	var addLastReviewDate = $formValues.find('.addLastReviewDate').val();
	if(removeLastReviewDate || setLastReviewDate != null && setLastReviewDate !== '')
		vals['setLastReviewDate'] = setLastReviewDate;
	if(addLastReviewDate != null && addLastReviewDate !== '')
		vals['addLastReviewDate'] = addLastReviewDate;
	var removeLastReviewDate = $formValues.find('.removeLastReviewDate').val();
	if(removeLastReviewDate != null && removeLastReviewDate !== '')
		vals['removeLastReviewDate'] = removeLastReviewDate;

	var valueReviewByID = $formValues.find('.valueReviewByID').val();
	var removeReviewByID = $formValues.find('.removeReviewByID').val() === 'true';
	var setReviewByID = removeReviewByID ? null : $formValues.find('.setReviewByID').val();
	var addReviewByID = $formValues.find('.addReviewByID').val();
	if(removeReviewByID || setReviewByID != null && setReviewByID !== '')
		vals['setReviewByID'] = setReviewByID;
	if(addReviewByID != null && addReviewByID !== '')
		vals['addReviewByID'] = addReviewByID;
	var removeReviewByID = $formValues.find('.removeReviewByID').val();
	if(removeReviewByID != null && removeReviewByID !== '')
		vals['removeReviewByID'] = removeReviewByID;

	var valueReviewRating = $formValues.find('.valueReviewRating').val();
	var removeReviewRating = $formValues.find('.removeReviewRating').val() === 'true';
	var setReviewRating = removeReviewRating ? null : $formValues.find('.setReviewRating').val();
	var addReviewRating = $formValues.find('.addReviewRating').val();
	if(removeReviewRating || setReviewRating != null && setReviewRating !== '')
		vals['setReviewRating'] = setReviewRating;
	if(addReviewRating != null && addReviewRating !== '')
		vals['addReviewRating'] = addReviewRating;
	var removeReviewRating = $formValues.find('.removeReviewRating').val();
	if(removeReviewRating != null && removeReviewRating !== '')
		vals['removeReviewRating'] = removeReviewRating;

	var valueTechnicalCompleteness = $formValues.find('.valueTechnicalCompleteness').val();
	var removeTechnicalCompleteness = $formValues.find('.removeTechnicalCompleteness').val() === 'true';
	var setTechnicalCompleteness = removeTechnicalCompleteness ? null : $formValues.find('.setTechnicalCompleteness').val();
	var addTechnicalCompleteness = $formValues.find('.addTechnicalCompleteness').val();
	if(removeTechnicalCompleteness || setTechnicalCompleteness != null && setTechnicalCompleteness !== '')
		vals['setTechnicalCompleteness'] = setTechnicalCompleteness;
	if(addTechnicalCompleteness != null && addTechnicalCompleteness !== '')
		vals['addTechnicalCompleteness'] = addTechnicalCompleteness;
	var removeTechnicalCompleteness = $formValues.find('.removeTechnicalCompleteness').val();
	if(removeTechnicalCompleteness != null && removeTechnicalCompleteness !== '')
		vals['removeTechnicalCompleteness'] = removeTechnicalCompleteness;

	var valueContentAccuracy = $formValues.find('.valueContentAccuracy').val();
	var removeContentAccuracy = $formValues.find('.removeContentAccuracy').val() === 'true';
	var setContentAccuracy = removeContentAccuracy ? null : $formValues.find('.setContentAccuracy').val();
	var addContentAccuracy = $formValues.find('.addContentAccuracy').val();
	if(removeContentAccuracy || setContentAccuracy != null && setContentAccuracy !== '')
		vals['setContentAccuracy'] = setContentAccuracy;
	if(addContentAccuracy != null && addContentAccuracy !== '')
		vals['addContentAccuracy'] = addContentAccuracy;
	var removeContentAccuracy = $formValues.find('.removeContentAccuracy').val();
	if(removeContentAccuracy != null && removeContentAccuracy !== '')
		vals['removeContentAccuracy'] = removeContentAccuracy;

	var valuePedagogy = $formValues.find('.valuePedagogy').val();
	var removePedagogy = $formValues.find('.removePedagogy').val() === 'true';
	var setPedagogy = removePedagogy ? null : $formValues.find('.setPedagogy').val();
	var addPedagogy = $formValues.find('.addPedagogy').val();
	if(removePedagogy || setPedagogy != null && setPedagogy !== '')
		vals['setPedagogy'] = setPedagogy;
	if(addPedagogy != null && addPedagogy !== '')
		vals['addPedagogy'] = addPedagogy;
	var removePedagogy = $formValues.find('.removePedagogy').val();
	if(removePedagogy != null && removePedagogy !== '')
		vals['removePedagogy'] = removePedagogy;

	var valueRatingComment = $formValues.find('.valueRatingComment').val();
	var removeRatingComment = $formValues.find('.removeRatingComment').val() === 'true';
	var setRatingComment = removeRatingComment ? null : $formValues.find('.setRatingComment').val();
	var addRatingComment = $formValues.find('.addRatingComment').val();
	if(removeRatingComment || setRatingComment != null && setRatingComment !== '')
		vals['setRatingComment'] = setRatingComment;
	if(addRatingComment != null && addRatingComment !== '')
		vals['addRatingComment'] = addRatingComment;
	var removeRatingComment = $formValues.find('.removeRatingComment').val();
	if(removeRatingComment != null && removeRatingComment !== '')
		vals['removeRatingComment'] = removeRatingComment;

	var valueStandardsAlignment = $formValues.find('.valueStandardsAlignment').val();
	var removeStandardsAlignment = $formValues.find('.removeStandardsAlignment').val() === 'true';
	var setStandardsAlignment = removeStandardsAlignment ? null : $formValues.find('.setStandardsAlignment').val();
	var addStandardsAlignment = $formValues.find('.addStandardsAlignment').val();
	if(removeStandardsAlignment || setStandardsAlignment != null && setStandardsAlignment !== '')
		vals['setStandardsAlignment'] = setStandardsAlignment;
	if(addStandardsAlignment != null && addStandardsAlignment !== '')
		vals['addStandardsAlignment'] = addStandardsAlignment;
	var removeStandardsAlignment = $formValues.find('.removeStandardsAlignment').val();
	if(removeStandardsAlignment != null && removeStandardsAlignment !== '')
		vals['removeStandardsAlignment'] = removeStandardsAlignment;

	var valueStandardsAlignmentComment = $formValues.find('.valueStandardsAlignmentComment').val();
	var removeStandardsAlignmentComment = $formValues.find('.removeStandardsAlignmentComment').val() === 'true';
	var setStandardsAlignmentComment = removeStandardsAlignmentComment ? null : $formValues.find('.setStandardsAlignmentComment').val();
	var addStandardsAlignmentComment = $formValues.find('.addStandardsAlignmentComment').val();
	if(removeStandardsAlignmentComment || setStandardsAlignmentComment != null && setStandardsAlignmentComment !== '')
		vals['setStandardsAlignmentComment'] = setStandardsAlignmentComment;
	if(addStandardsAlignmentComment != null && addStandardsAlignmentComment !== '')
		vals['addStandardsAlignmentComment'] = addStandardsAlignmentComment;
	var removeStandardsAlignmentComment = $formValues.find('.removeStandardsAlignmentComment').val();
	if(removeStandardsAlignmentComment != null && removeStandardsAlignmentComment !== '')
		vals['removeStandardsAlignmentComment'] = removeStandardsAlignmentComment;

	var valueSubjectMatter = $formValues.find('.valueSubjectMatter').val();
	var removeSubjectMatter = $formValues.find('.removeSubjectMatter').val() === 'true';
	var setSubjectMatter = removeSubjectMatter ? null : $formValues.find('.setSubjectMatter').val();
	var addSubjectMatter = $formValues.find('.addSubjectMatter').val();
	if(removeSubjectMatter || setSubjectMatter != null && setSubjectMatter !== '')
		vals['setSubjectMatter'] = setSubjectMatter;
	if(addSubjectMatter != null && addSubjectMatter !== '')
		vals['addSubjectMatter'] = addSubjectMatter;
	var removeSubjectMatter = $formValues.find('.removeSubjectMatter').val();
	if(removeSubjectMatter != null && removeSubjectMatter !== '')
		vals['removeSubjectMatter'] = removeSubjectMatter;

	var valueSubjectMatterComment = $formValues.find('.valueSubjectMatterComment').val();
	var removeSubjectMatterComment = $formValues.find('.removeSubjectMatterComment').val() === 'true';
	var setSubjectMatterComment = removeSubjectMatterComment ? null : $formValues.find('.setSubjectMatterComment').val();
	var addSubjectMatterComment = $formValues.find('.addSubjectMatterComment').val();
	if(removeSubjectMatterComment || setSubjectMatterComment != null && setSubjectMatterComment !== '')
		vals['setSubjectMatterComment'] = setSubjectMatterComment;
	if(addSubjectMatterComment != null && addSubjectMatterComment !== '')
		vals['addSubjectMatterComment'] = addSubjectMatterComment;
	var removeSubjectMatterComment = $formValues.find('.removeSubjectMatterComment').val();
	if(removeSubjectMatterComment != null && removeSubjectMatterComment !== '')
		vals['removeSubjectMatterComment'] = removeSubjectMatterComment;

	var valueSupportsTeaching = $formValues.find('.valueSupportsTeaching').val();
	var removeSupportsTeaching = $formValues.find('.removeSupportsTeaching').val() === 'true';
	var setSupportsTeaching = removeSupportsTeaching ? null : $formValues.find('.setSupportsTeaching').val();
	var addSupportsTeaching = $formValues.find('.addSupportsTeaching').val();
	if(removeSupportsTeaching || setSupportsTeaching != null && setSupportsTeaching !== '')
		vals['setSupportsTeaching'] = setSupportsTeaching;
	if(addSupportsTeaching != null && addSupportsTeaching !== '')
		vals['addSupportsTeaching'] = addSupportsTeaching;
	var removeSupportsTeaching = $formValues.find('.removeSupportsTeaching').val();
	if(removeSupportsTeaching != null && removeSupportsTeaching !== '')
		vals['removeSupportsTeaching'] = removeSupportsTeaching;

	var valueSupportsTeachingComment = $formValues.find('.valueSupportsTeachingComment').val();
	var removeSupportsTeachingComment = $formValues.find('.removeSupportsTeachingComment').val() === 'true';
	var setSupportsTeachingComment = removeSupportsTeachingComment ? null : $formValues.find('.setSupportsTeachingComment').val();
	var addSupportsTeachingComment = $formValues.find('.addSupportsTeachingComment').val();
	if(removeSupportsTeachingComment || setSupportsTeachingComment != null && setSupportsTeachingComment !== '')
		vals['setSupportsTeachingComment'] = setSupportsTeachingComment;
	if(addSupportsTeachingComment != null && addSupportsTeachingComment !== '')
		vals['addSupportsTeachingComment'] = addSupportsTeachingComment;
	var removeSupportsTeachingComment = $formValues.find('.removeSupportsTeachingComment').val();
	if(removeSupportsTeachingComment != null && removeSupportsTeachingComment !== '')
		vals['removeSupportsTeachingComment'] = removeSupportsTeachingComment;

	var valueAssessmentsQuality = $formValues.find('.valueAssessmentsQuality').val();
	var removeAssessmentsQuality = $formValues.find('.removeAssessmentsQuality').val() === 'true';
	var setAssessmentsQuality = removeAssessmentsQuality ? null : $formValues.find('.setAssessmentsQuality').val();
	var addAssessmentsQuality = $formValues.find('.addAssessmentsQuality').val();
	if(removeAssessmentsQuality || setAssessmentsQuality != null && setAssessmentsQuality !== '')
		vals['setAssessmentsQuality'] = setAssessmentsQuality;
	if(addAssessmentsQuality != null && addAssessmentsQuality !== '')
		vals['addAssessmentsQuality'] = addAssessmentsQuality;
	var removeAssessmentsQuality = $formValues.find('.removeAssessmentsQuality').val();
	if(removeAssessmentsQuality != null && removeAssessmentsQuality !== '')
		vals['removeAssessmentsQuality'] = removeAssessmentsQuality;

	var valueAssessmentsQualityComment = $formValues.find('.valueAssessmentsQualityComment').val();
	var removeAssessmentsQualityComment = $formValues.find('.removeAssessmentsQualityComment').val() === 'true';
	var setAssessmentsQualityComment = removeAssessmentsQualityComment ? null : $formValues.find('.setAssessmentsQualityComment').val();
	var addAssessmentsQualityComment = $formValues.find('.addAssessmentsQualityComment').val();
	if(removeAssessmentsQualityComment || setAssessmentsQualityComment != null && setAssessmentsQualityComment !== '')
		vals['setAssessmentsQualityComment'] = setAssessmentsQualityComment;
	if(addAssessmentsQualityComment != null && addAssessmentsQualityComment !== '')
		vals['addAssessmentsQualityComment'] = addAssessmentsQualityComment;
	var removeAssessmentsQualityComment = $formValues.find('.removeAssessmentsQualityComment').val();
	if(removeAssessmentsQualityComment != null && removeAssessmentsQualityComment !== '')
		vals['removeAssessmentsQualityComment'] = removeAssessmentsQualityComment;

	var valueInteractivityQuality = $formValues.find('.valueInteractivityQuality').val();
	var removeInteractivityQuality = $formValues.find('.removeInteractivityQuality').val() === 'true';
	var setInteractivityQuality = removeInteractivityQuality ? null : $formValues.find('.setInteractivityQuality').val();
	var addInteractivityQuality = $formValues.find('.addInteractivityQuality').val();
	if(removeInteractivityQuality || setInteractivityQuality != null && setInteractivityQuality !== '')
		vals['setInteractivityQuality'] = setInteractivityQuality;
	if(addInteractivityQuality != null && addInteractivityQuality !== '')
		vals['addInteractivityQuality'] = addInteractivityQuality;
	var removeInteractivityQuality = $formValues.find('.removeInteractivityQuality').val();
	if(removeInteractivityQuality != null && removeInteractivityQuality !== '')
		vals['removeInteractivityQuality'] = removeInteractivityQuality;

	var valueInteractivityQualityComment = $formValues.find('.valueInteractivityQualityComment').val();
	var removeInteractivityQualityComment = $formValues.find('.removeInteractivityQualityComment').val() === 'true';
	var setInteractivityQualityComment = removeInteractivityQualityComment ? null : $formValues.find('.setInteractivityQualityComment').val();
	var addInteractivityQualityComment = $formValues.find('.addInteractivityQualityComment').val();
	if(removeInteractivityQualityComment || setInteractivityQualityComment != null && setInteractivityQualityComment !== '')
		vals['setInteractivityQualityComment'] = setInteractivityQualityComment;
	if(addInteractivityQualityComment != null && addInteractivityQualityComment !== '')
		vals['addInteractivityQualityComment'] = addInteractivityQualityComment;
	var removeInteractivityQualityComment = $formValues.find('.removeInteractivityQualityComment').val();
	if(removeInteractivityQualityComment != null && removeInteractivityQualityComment !== '')
		vals['removeInteractivityQualityComment'] = removeInteractivityQualityComment;

	var valueInstructionalQuality = $formValues.find('.valueInstructionalQuality').val();
	var removeInstructionalQuality = $formValues.find('.removeInstructionalQuality').val() === 'true';
	var setInstructionalQuality = removeInstructionalQuality ? null : $formValues.find('.setInstructionalQuality').val();
	var addInstructionalQuality = $formValues.find('.addInstructionalQuality').val();
	if(removeInstructionalQuality || setInstructionalQuality != null && setInstructionalQuality !== '')
		vals['setInstructionalQuality'] = setInstructionalQuality;
	if(addInstructionalQuality != null && addInstructionalQuality !== '')
		vals['addInstructionalQuality'] = addInstructionalQuality;
	var removeInstructionalQuality = $formValues.find('.removeInstructionalQuality').val();
	if(removeInstructionalQuality != null && removeInstructionalQuality !== '')
		vals['removeInstructionalQuality'] = removeInstructionalQuality;

	var valueInstructionalQualityComment = $formValues.find('.valueInstructionalQualityComment').val();
	var removeInstructionalQualityComment = $formValues.find('.removeInstructionalQualityComment').val() === 'true';
	var setInstructionalQualityComment = removeInstructionalQualityComment ? null : $formValues.find('.setInstructionalQualityComment').val();
	var addInstructionalQualityComment = $formValues.find('.addInstructionalQualityComment').val();
	if(removeInstructionalQualityComment || setInstructionalQualityComment != null && setInstructionalQualityComment !== '')
		vals['setInstructionalQualityComment'] = setInstructionalQualityComment;
	if(addInstructionalQualityComment != null && addInstructionalQualityComment !== '')
		vals['addInstructionalQualityComment'] = addInstructionalQualityComment;
	var removeInstructionalQualityComment = $formValues.find('.removeInstructionalQualityComment').val();
	if(removeInstructionalQualityComment != null && removeInstructionalQualityComment !== '')
		vals['removeInstructionalQualityComment'] = removeInstructionalQualityComment;

	var valueDeeperLearning = $formValues.find('.valueDeeperLearning').val();
	var removeDeeperLearning = $formValues.find('.removeDeeperLearning').val() === 'true';
	var setDeeperLearning = removeDeeperLearning ? null : $formValues.find('.setDeeperLearning').val();
	var addDeeperLearning = $formValues.find('.addDeeperLearning').val();
	if(removeDeeperLearning || setDeeperLearning != null && setDeeperLearning !== '')
		vals['setDeeperLearning'] = setDeeperLearning;
	if(addDeeperLearning != null && addDeeperLearning !== '')
		vals['addDeeperLearning'] = addDeeperLearning;
	var removeDeeperLearning = $formValues.find('.removeDeeperLearning').val();
	if(removeDeeperLearning != null && removeDeeperLearning !== '')
		vals['removeDeeperLearning'] = removeDeeperLearning;

	var valueDeeperLearningComment = $formValues.find('.valueDeeperLearningComment').val();
	var removeDeeperLearningComment = $formValues.find('.removeDeeperLearningComment').val() === 'true';
	var setDeeperLearningComment = removeDeeperLearningComment ? null : $formValues.find('.setDeeperLearningComment').val();
	var addDeeperLearningComment = $formValues.find('.addDeeperLearningComment').val();
	if(removeDeeperLearningComment || setDeeperLearningComment != null && setDeeperLearningComment !== '')
		vals['setDeeperLearningComment'] = setDeeperLearningComment;
	if(addDeeperLearningComment != null && addDeeperLearningComment !== '')
		vals['addDeeperLearningComment'] = addDeeperLearningComment;
	var removeDeeperLearningComment = $formValues.find('.removeDeeperLearningComment').val();
	if(removeDeeperLearningComment != null && removeDeeperLearningComment !== '')
		vals['removeDeeperLearningComment'] = removeDeeperLearningComment;

	var valuePartner = $formValues.find('.valuePartner').val();
	var removePartner = $formValues.find('.removePartner').val() === 'true';
	var setPartner = removePartner ? null : $formValues.find('.setPartner').val();
	var addPartner = $formValues.find('.addPartner').val();
	if(removePartner || setPartner != null && setPartner !== '')
		vals['setPartner'] = setPartner;
	if(addPartner != null && addPartner !== '')
		vals['addPartner'] = addPartner;
	var removePartner = $formValues.find('.removePartner').val();
	if(removePartner != null && removePartner !== '')
		vals['removePartner'] = removePartner;

	var valueCreateDate = $formValues.find('.valueCreateDate').val();
	var removeCreateDate = $formValues.find('.removeCreateDate').val() === 'true';
	var setCreateDate = removeCreateDate ? null : $formValues.find('.setCreateDate').val();
	var addCreateDate = $formValues.find('.addCreateDate').val();
	if(removeCreateDate || setCreateDate != null && setCreateDate !== '')
		vals['setCreateDate'] = setCreateDate;
	if(addCreateDate != null && addCreateDate !== '')
		vals['addCreateDate'] = addCreateDate;
	var removeCreateDate = $formValues.find('.removeCreateDate').val();
	if(removeCreateDate != null && removeCreateDate !== '')
		vals['removeCreateDate'] = removeCreateDate;

	var valueType = $formValues.find('.valueType').val();
	var removeType = $formValues.find('.removeType').val() === 'true';
	var setType = removeType ? null : $formValues.find('.setType').val();
	var addType = $formValues.find('.addType').val();
	if(removeType || setType != null && setType !== '')
		vals['setType'] = setType;
	if(addType != null && addType !== '')
		vals['addType'] = addType;
	var removeType = $formValues.find('.removeType').val();
	if(removeType != null && removeType !== '')
		vals['removeType'] = removeType;

	var valueFeatured = $formValues.find('.valueFeatured').val();
	var removeFeatured = $formValues.find('.removeFeatured').val() === 'true';
	var setFeatured = removeFeatured ? null : $formValues.find('.setFeatured').val();
	var addFeatured = $formValues.find('.addFeatured').val();
	if(removeFeatured || setFeatured != null && setFeatured !== '')
		vals['setFeatured'] = setFeatured;
	if(addFeatured != null && addFeatured !== '')
		vals['addFeatured'] = addFeatured;
	var removeFeatured = $formValues.find('.removeFeatured').val();
	if(removeFeatured != null && removeFeatured !== '')
		vals['removeFeatured'] = removeFeatured;

	var valuePage = $formValues.find('.valuePage').val();
	var removePage = $formValues.find('.removePage').val() === 'true';
	var setPage = removePage ? null : $formValues.find('.setPage').val();
	var addPage = $formValues.find('.addPage').val();
	if(removePage || setPage != null && setPage !== '')
		vals['setPage'] = setPage;
	if(addPage != null && addPage !== '')
		vals['addPage'] = addPage;
	var removePage = $formValues.find('.removePage').val();
	if(removePage != null && removePage !== '')
		vals['removePage'] = removePage;

	var valueActive = $formValues.find('.valueActive').val();
	var removeActive = $formValues.find('.removeActive').val() === 'true';
	var setActive = removeActive ? null : $formValues.find('.setActive').val();
	var addActive = $formValues.find('.addActive').val();
	if(removeActive || setActive != null && setActive !== '')
		vals['setActive'] = setActive;
	if(addActive != null && addActive !== '')
		vals['addActive'] = addActive;
	var removeActive = $formValues.find('.removeActive').val();
	if(removeActive != null && removeActive !== '')
		vals['removeActive'] = removeActive;

	var valuePublic = $formValues.find('.valuePublic').val();
	var removePublic = $formValues.find('.removePublic').val() === 'true';
	var setPublic = removePublic ? null : $formValues.find('.setPublic').val();
	var addPublic = $formValues.find('.addPublic').val();
	if(removePublic || setPublic != null && setPublic !== '')
		vals['setPublic'] = setPublic;
	if(addPublic != null && addPublic !== '')
		vals['addPublic'] = addPublic;
	var removePublic = $formValues.find('.removePublic').val();
	if(removePublic != null && removePublic !== '')
		vals['removePublic'] = removePublic;

	var valueXwd_id = $formValues.find('.valueXwd_id').val();
	var removeXwd_id = $formValues.find('.removeXwd_id').val() === 'true';
	var setXwd_id = removeXwd_id ? null : $formValues.find('.setXwd_id').val();
	var addXwd_id = $formValues.find('.addXwd_id').val();
	if(removeXwd_id || setXwd_id != null && setXwd_id !== '')
		vals['setXwd_id'] = setXwd_id;
	if(addXwd_id != null && addXwd_id !== '')
		vals['addXwd_id'] = addXwd_id;
	var removeXwd_id = $formValues.find('.removeXwd_id').val();
	if(removeXwd_id != null && removeXwd_id !== '')
		vals['removeXwd_id'] = removeXwd_id;

	var valueMediaType = $formValues.find('.valueMediaType').val();
	var removeMediaType = $formValues.find('.removeMediaType').val() === 'true';
	var setMediaType = removeMediaType ? null : $formValues.find('.setMediaType').val();
	var addMediaType = $formValues.find('.addMediaType').val();
	if(removeMediaType || setMediaType != null && setMediaType !== '')
		vals['setMediaType'] = setMediaType;
	if(addMediaType != null && addMediaType !== '')
		vals['addMediaType'] = addMediaType;
	var removeMediaType = $formValues.find('.removeMediaType').val();
	if(removeMediaType != null && removeMediaType !== '')
		vals['removeMediaType'] = removeMediaType;

	var valueAccess = $formValues.find('.valueAccess').val();
	var removeAccess = $formValues.find('.removeAccess').val() === 'true';
	var setAccess = removeAccess ? null : $formValues.find('.setAccess').val();
	var addAccess = $formValues.find('.addAccess').val();
	if(removeAccess || setAccess != null && setAccess !== '')
		vals['setAccess'] = setAccess;
	if(addAccess != null && addAccess !== '')
		vals['addAccess'] = addAccess;
	var removeAccess = $formValues.find('.removeAccess').val();
	if(removeAccess != null && removeAccess !== '')
		vals['removeAccess'] = removeAccess;

	var valueMemberRating = $formValues.find('.valueMemberRating').val();
	var removeMemberRating = $formValues.find('.removeMemberRating').val() === 'true';
	var setMemberRating = removeMemberRating ? null : $formValues.find('.setMemberRating').val();
	var addMemberRating = $formValues.find('.addMemberRating').val();
	if(removeMemberRating || setMemberRating != null && setMemberRating !== '')
		vals['setMemberRating'] = setMemberRating;
	if(addMemberRating != null && addMemberRating !== '')
		vals['addMemberRating'] = addMemberRating;
	var removeMemberRating = $formValues.find('.removeMemberRating').val();
	if(removeMemberRating != null && removeMemberRating !== '')
		vals['removeMemberRating'] = removeMemberRating;

	var valueAligned = $formValues.find('.valueAligned').val();
	var removeAligned = $formValues.find('.removeAligned').val() === 'true';
	var setAligned = removeAligned ? null : $formValues.find('.setAligned').val();
	var addAligned = $formValues.find('.addAligned').val();
	if(removeAligned || setAligned != null && setAligned !== '')
		vals['setAligned'] = setAligned;
	if(addAligned != null && addAligned !== '')
		vals['addAligned'] = addAligned;
	var removeAligned = $formValues.find('.removeAligned').val();
	if(removeAligned != null && removeAligned !== '')
		vals['removeAligned'] = removeAligned;

	var valuePageUrl = $formValues.find('.valuePageUrl').val();
	var removePageUrl = $formValues.find('.removePageUrl').val() === 'true';
	var setPageUrl = removePageUrl ? null : $formValues.find('.setPageUrl').val();
	var addPageUrl = $formValues.find('.addPageUrl').val();
	if(removePageUrl || setPageUrl != null && setPageUrl !== '')
		vals['setPageUrl'] = setPageUrl;
	if(addPageUrl != null && addPageUrl !== '')
		vals['addPageUrl'] = addPageUrl;
	var removePageUrl = $formValues.find('.removePageUrl').val();
	if(removePageUrl != null && removePageUrl !== '')
		vals['removePageUrl'] = removePageUrl;

	var valueIndexed = $formValues.find('.valueIndexed').val();
	var removeIndexed = $formValues.find('.removeIndexed').val() === 'true';
	var setIndexed = removeIndexed ? null : $formValues.find('.setIndexed').val();
	var addIndexed = $formValues.find('.addIndexed').val();
	if(removeIndexed || setIndexed != null && setIndexed !== '')
		vals['setIndexed'] = setIndexed;
	if(addIndexed != null && addIndexed !== '')
		vals['addIndexed'] = addIndexed;
	var removeIndexed = $formValues.find('.removeIndexed').val();
	if(removeIndexed != null && removeIndexed !== '')
		vals['removeIndexed'] = removeIndexed;

	var valueLastIndexDate = $formValues.find('.valueLastIndexDate').val();
	var removeLastIndexDate = $formValues.find('.removeLastIndexDate').val() === 'true';
	var setLastIndexDate = removeLastIndexDate ? null : $formValues.find('.setLastIndexDate').val();
	var addLastIndexDate = $formValues.find('.addLastIndexDate').val();
	if(removeLastIndexDate || setLastIndexDate != null && setLastIndexDate !== '')
		vals['setLastIndexDate'] = setLastIndexDate;
	if(addLastIndexDate != null && addLastIndexDate !== '')
		vals['addLastIndexDate'] = addLastIndexDate;
	var removeLastIndexDate = $formValues.find('.removeLastIndexDate').val();
	if(removeLastIndexDate != null && removeLastIndexDate !== '')
		vals['removeLastIndexDate'] = removeLastIndexDate;

	var valueIndexRequired = $formValues.find('.valueIndexRequired').val();
	var removeIndexRequired = $formValues.find('.removeIndexRequired').val() === 'true';
	var setIndexRequired = removeIndexRequired ? null : $formValues.find('.setIndexRequired').val();
	var addIndexRequired = $formValues.find('.addIndexRequired').val();
	if(removeIndexRequired || setIndexRequired != null && setIndexRequired !== '')
		vals['setIndexRequired'] = setIndexRequired;
	if(addIndexRequired != null && addIndexRequired !== '')
		vals['addIndexRequired'] = addIndexRequired;
	var removeIndexRequired = $formValues.find('.removeIndexRequired').val();
	if(removeIndexRequired != null && removeIndexRequired !== '')
		vals['removeIndexRequired'] = removeIndexRequired;

	var valueIndexRequiredDate = $formValues.find('.valueIndexRequiredDate').val();
	var removeIndexRequiredDate = $formValues.find('.removeIndexRequiredDate').val() === 'true';
	var setIndexRequiredDate = removeIndexRequiredDate ? null : $formValues.find('.setIndexRequiredDate').val();
	var addIndexRequiredDate = $formValues.find('.addIndexRequiredDate').val();
	if(removeIndexRequiredDate || setIndexRequiredDate != null && setIndexRequiredDate !== '')
		vals['setIndexRequiredDate'] = setIndexRequiredDate;
	if(addIndexRequiredDate != null && addIndexRequiredDate !== '')
		vals['addIndexRequiredDate'] = addIndexRequiredDate;
	var removeIndexRequiredDate = $formValues.find('.removeIndexRequiredDate').val();
	if(removeIndexRequiredDate != null && removeIndexRequiredDate !== '')
		vals['removeIndexRequiredDate'] = removeIndexRequiredDate;

	var valueRescrape = $formValues.find('.valueRescrape').val();
	var removeRescrape = $formValues.find('.removeRescrape').val() === 'true';
	var setRescrape = removeRescrape ? null : $formValues.find('.setRescrape').val();
	var addRescrape = $formValues.find('.addRescrape').val();
	if(removeRescrape || setRescrape != null && setRescrape !== '')
		vals['setRescrape'] = setRescrape;
	if(addRescrape != null && addRescrape !== '')
		vals['addRescrape'] = addRescrape;
	var removeRescrape = $formValues.find('.removeRescrape').val();
	if(removeRescrape != null && removeRescrape !== '')
		vals['removeRescrape'] = removeRescrape;

	var valueGoButton = $formValues.find('.valueGoButton').val();
	var removeGoButton = $formValues.find('.removeGoButton').val() === 'true';
	var setGoButton = removeGoButton ? null : $formValues.find('.setGoButton').val();
	var addGoButton = $formValues.find('.addGoButton').val();
	if(removeGoButton || setGoButton != null && setGoButton !== '')
		vals['setGoButton'] = setGoButton;
	if(addGoButton != null && addGoButton !== '')
		vals['addGoButton'] = addGoButton;
	var removeGoButton = $formValues.find('.removeGoButton').val();
	if(removeGoButton != null && removeGoButton !== '')
		vals['removeGoButton'] = removeGoButton;

	var valueDownloadButton = $formValues.find('.valueDownloadButton').val();
	var removeDownloadButton = $formValues.find('.removeDownloadButton').val() === 'true';
	var setDownloadButton = removeDownloadButton ? null : $formValues.find('.setDownloadButton').val();
	var addDownloadButton = $formValues.find('.addDownloadButton').val();
	if(removeDownloadButton || setDownloadButton != null && setDownloadButton !== '')
		vals['setDownloadButton'] = setDownloadButton;
	if(addDownloadButton != null && addDownloadButton !== '')
		vals['addDownloadButton'] = addDownloadButton;
	var removeDownloadButton = $formValues.find('.removeDownloadButton').val();
	if(removeDownloadButton != null && removeDownloadButton !== '')
		vals['removeDownloadButton'] = removeDownloadButton;

	var valueTopOfSearch = $formValues.find('.valueTopOfSearch').val();
	var removeTopOfSearch = $formValues.find('.removeTopOfSearch').val() === 'true';
	var setTopOfSearch = removeTopOfSearch ? null : $formValues.find('.setTopOfSearch').val();
	var addTopOfSearch = $formValues.find('.addTopOfSearch').val();
	if(removeTopOfSearch || setTopOfSearch != null && setTopOfSearch !== '')
		vals['setTopOfSearch'] = setTopOfSearch;
	if(addTopOfSearch != null && addTopOfSearch !== '')
		vals['addTopOfSearch'] = addTopOfSearch;
	var removeTopOfSearch = $formValues.find('.removeTopOfSearch').val();
	if(removeTopOfSearch != null && removeTopOfSearch !== '')
		vals['removeTopOfSearch'] = removeTopOfSearch;

	var valueRemove = $formValues.find('.valueRemove').val();
	var removeRemove = $formValues.find('.removeRemove').val() === 'true';
	var setRemove = removeRemove ? null : $formValues.find('.setRemove').val();
	var addRemove = $formValues.find('.addRemove').val();
	if(removeRemove || setRemove != null && setRemove !== '')
		vals['setRemove'] = setRemove;
	if(addRemove != null && addRemove !== '')
		vals['addRemove'] = addRemove;
	var removeRemove = $formValues.find('.removeRemove').val();
	if(removeRemove != null && removeRemove !== '')
		vals['removeRemove'] = removeRemove;

	var valueSpam = $formValues.find('.valueSpam').val();
	var removeSpam = $formValues.find('.removeSpam').val() === 'true';
	var setSpam = removeSpam ? null : $formValues.find('.setSpam').val();
	var addSpam = $formValues.find('.addSpam').val();
	if(removeSpam || setSpam != null && setSpam !== '')
		vals['setSpam'] = setSpam;
	if(addSpam != null && addSpam !== '')
		vals['addSpam'] = addSpam;
	var removeSpam = $formValues.find('.removeSpam').val();
	if(removeSpam != null && removeSpam !== '')
		vals['removeSpam'] = removeSpam;

	var valueTopOfSearchInt = $formValues.find('.valueTopOfSearchInt').val();
	var removeTopOfSearchInt = $formValues.find('.removeTopOfSearchInt').val() === 'true';
	var setTopOfSearchInt = removeTopOfSearchInt ? null : $formValues.find('.setTopOfSearchInt').val();
	var addTopOfSearchInt = $formValues.find('.addTopOfSearchInt').val();
	if(removeTopOfSearchInt || setTopOfSearchInt != null && setTopOfSearchInt !== '')
		vals['setTopOfSearchInt'] = setTopOfSearchInt;
	if(addTopOfSearchInt != null && addTopOfSearchInt !== '')
		vals['addTopOfSearchInt'] = addTopOfSearchInt;
	var removeTopOfSearchInt = $formValues.find('.removeTopOfSearchInt').val();
	if(removeTopOfSearchInt != null && removeTopOfSearchInt !== '')
		vals['removeTopOfSearchInt'] = removeTopOfSearchInt;

	var valuePartnerInt = $formValues.find('.valuePartnerInt').val();
	var removePartnerInt = $formValues.find('.removePartnerInt').val() === 'true';
	var setPartnerInt = removePartnerInt ? null : $formValues.find('.setPartnerInt').val();
	var addPartnerInt = $formValues.find('.addPartnerInt').val();
	if(removePartnerInt || setPartnerInt != null && setPartnerInt !== '')
		vals['setPartnerInt'] = setPartnerInt;
	if(addPartnerInt != null && addPartnerInt !== '')
		vals['addPartnerInt'] = addPartnerInt;
	var removePartnerInt = $formValues.find('.removePartnerInt').val();
	if(removePartnerInt != null && removePartnerInt !== '')
		vals['removePartnerInt'] = removePartnerInt;

	var valueReviewResource = $formValues.find('.valueReviewResource').val();
	var removeReviewResource = $formValues.find('.removeReviewResource').val() === 'true';
	var setReviewResource = removeReviewResource ? null : $formValues.find('.setReviewResource').val();
	var addReviewResource = $formValues.find('.addReviewResource').val();
	if(removeReviewResource || setReviewResource != null && setReviewResource !== '')
		vals['setReviewResource'] = setReviewResource;
	if(addReviewResource != null && addReviewResource !== '')
		vals['addReviewResource'] = addReviewResource;
	var removeReviewResource = $formValues.find('.removeReviewResource').val();
	if(removeReviewResource != null && removeReviewResource !== '')
		vals['removeReviewResource'] = removeReviewResource;

	var valueOldUrl = $formValues.find('.valueOldUrl').val();
	var removeOldUrl = $formValues.find('.removeOldUrl').val() === 'true';
	var setOldUrl = removeOldUrl ? null : $formValues.find('.setOldUrl').val();
	var addOldUrl = $formValues.find('.addOldUrl').val();
	if(removeOldUrl || setOldUrl != null && setOldUrl !== '')
		vals['setOldUrl'] = setOldUrl;
	if(addOldUrl != null && addOldUrl !== '')
		vals['addOldUrl'] = addOldUrl;
	var removeOldUrl = $formValues.find('.removeOldUrl').val();
	if(removeOldUrl != null && removeOldUrl !== '')
		vals['removeOldUrl'] = removeOldUrl;

	var valueContentDisplayOk = $formValues.find('.valueContentDisplayOk').val();
	var removeContentDisplayOk = $formValues.find('.removeContentDisplayOk').val() === 'true';
	var setContentDisplayOk = removeContentDisplayOk ? null : $formValues.find('.setContentDisplayOk').val();
	var addContentDisplayOk = $formValues.find('.addContentDisplayOk').val();
	if(removeContentDisplayOk || setContentDisplayOk != null && setContentDisplayOk !== '')
		vals['setContentDisplayOk'] = setContentDisplayOk;
	if(addContentDisplayOk != null && addContentDisplayOk !== '')
		vals['addContentDisplayOk'] = addContentDisplayOk;
	var removeContentDisplayOk = $formValues.find('.removeContentDisplayOk').val();
	if(removeContentDisplayOk != null && removeContentDisplayOk !== '')
		vals['removeContentDisplayOk'] = removeContentDisplayOk;

	var valueMetadata = $formValues.find('.valueMetadata').val();
	var removeMetadata = $formValues.find('.removeMetadata').val() === 'true';
	var setMetadata = removeMetadata ? null : $formValues.find('.setMetadata').val();
	var addMetadata = $formValues.find('.addMetadata').val();
	if(removeMetadata || setMetadata != null && setMetadata !== '')
		vals['setMetadata'] = setMetadata;
	if(addMetadata != null && addMetadata !== '')
		vals['addMetadata'] = addMetadata;
	var removeMetadata = $formValues.find('.removeMetadata').val();
	if(removeMetadata != null && removeMetadata !== '')
		vals['removeMetadata'] = removeMetadata;

	var valueApprovalStatus = $formValues.find('.valueApprovalStatus').val();
	var removeApprovalStatus = $formValues.find('.removeApprovalStatus').val() === 'true';
	var setApprovalStatus = removeApprovalStatus ? null : $formValues.find('.setApprovalStatus').val();
	var addApprovalStatus = $formValues.find('.addApprovalStatus').val();
	if(removeApprovalStatus || setApprovalStatus != null && setApprovalStatus !== '')
		vals['setApprovalStatus'] = setApprovalStatus;
	if(addApprovalStatus != null && addApprovalStatus !== '')
		vals['addApprovalStatus'] = addApprovalStatus;
	var removeApprovalStatus = $formValues.find('.removeApprovalStatus').val();
	if(removeApprovalStatus != null && removeApprovalStatus !== '')
		vals['removeApprovalStatus'] = removeApprovalStatus;

	var valueApprovalStatusDate = $formValues.find('.valueApprovalStatusDate').val();
	var removeApprovalStatusDate = $formValues.find('.removeApprovalStatusDate').val() === 'true';
	var setApprovalStatusDate = removeApprovalStatusDate ? null : $formValues.find('.setApprovalStatusDate').val();
	var addApprovalStatusDate = $formValues.find('.addApprovalStatusDate').val();
	if(removeApprovalStatusDate || setApprovalStatusDate != null && setApprovalStatusDate !== '')
		vals['setApprovalStatusDate'] = setApprovalStatusDate;
	if(addApprovalStatusDate != null && addApprovalStatusDate !== '')
		vals['addApprovalStatusDate'] = addApprovalStatusDate;
	var removeApprovalStatusDate = $formValues.find('.removeApprovalStatusDate').val();
	if(removeApprovalStatusDate != null && removeApprovalStatusDate !== '')
		vals['removeApprovalStatusDate'] = removeApprovalStatusDate;

	var valueSpamUser = $formValues.find('.valueSpamUser').val();
	var removeSpamUser = $formValues.find('.removeSpamUser').val() === 'true';
	var setSpamUser = removeSpamUser ? null : $formValues.find('.setSpamUser').val();
	var addSpamUser = $formValues.find('.addSpamUser').val();
	if(removeSpamUser || setSpamUser != null && setSpamUser !== '')
		vals['setSpamUser'] = setSpamUser;
	if(addSpamUser != null && addSpamUser !== '')
		vals['addSpamUser'] = addSpamUser;
	var removeSpamUser = $formValues.find('.removeSpamUser').val();
	if(removeSpamUser != null && removeSpamUser !== '')
		vals['removeSpamUser'] = removeSpamUser;

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

		var filterLicenseId = $formFilters.find('.valueLicenseId').val();
		if(filterLicenseId != null && filterLicenseId !== '')
			filters.push({ name: 'fq', value: 'licenseId:' + filterLicenseId });

		var filterContributorId = $formFilters.find('.valueContributorId').val();
		if(filterContributorId != null && filterContributorId !== '')
			filters.push({ name: 'fq', value: 'contributorId:' + filterContributorId });

		var filterContributionDate = $formFilters.find('.valueContributionDate').val();
		if(filterContributionDate != null && filterContributionDate !== '')
			filters.push({ name: 'fq', value: 'contributionDate:' + filterContributionDate });

		var filterDescription = $formFilters.find('.valueDescription').val();
		if(filterDescription != null && filterDescription !== '')
			filters.push({ name: 'fq', value: 'description:' + filterDescription });

		var filterTitle = $formFilters.find('.valueTitle').val();
		if(filterTitle != null && filterTitle !== '')
			filters.push({ name: 'fq', value: 'title:' + filterTitle });

		var filterKeywords = $formFilters.find('.valueKeywords').val();
		if(filterKeywords != null && filterKeywords !== '')
			filters.push({ name: 'fq', value: 'keywords:' + filterKeywords });

		var filterGeneratedKeywords = $formFilters.find('.valueGeneratedKeywords').val();
		if(filterGeneratedKeywords != null && filterGeneratedKeywords !== '')
			filters.push({ name: 'fq', value: 'generatedKeywords:' + filterGeneratedKeywords });

		var filterLanguage = $formFilters.find('.valueLanguage').val();
		if(filterLanguage != null && filterLanguage !== '')
			filters.push({ name: 'fq', value: 'language:' + filterLanguage });

		var filterLastEditorId = $formFilters.find('.valueLastEditorId').val();
		if(filterLastEditorId != null && filterLastEditorId !== '')
			filters.push({ name: 'fq', value: 'lastEditorId:' + filterLastEditorId });

		var filterLastEditDate = $formFilters.find('.valueLastEditDate').val();
		if(filterLastEditDate != null && filterLastEditDate !== '')
			filters.push({ name: 'fq', value: 'lastEditDate:' + filterLastEditDate });

		var filterCurrikiLicense = $formFilters.find('.valueCurrikiLicense').val();
		if(filterCurrikiLicense != null && filterCurrikiLicense !== '')
			filters.push({ name: 'fq', value: 'currikiLicense:' + filterCurrikiLicense });

		var filterExternalUrl = $formFilters.find('.valueExternalUrl').val();
		if(filterExternalUrl != null && filterExternalUrl !== '')
			filters.push({ name: 'fq', value: 'externalUrl:' + filterExternalUrl });

		var filterResourceChecked = $formFilters.find('.valueResourceChecked').val();
		if(filterResourceChecked != null && filterResourceChecked !== '')
			filters.push({ name: 'fq', value: 'resourceChecked:' + filterResourceChecked });

		var filterResourceCheckDate = $formFilters.find('.valueResourceCheckDate').val();
		if(filterResourceCheckDate != null && filterResourceCheckDate !== '')
			filters.push({ name: 'fq', value: 'resourceCheckDate:' + filterResourceCheckDate });

		var filterResourceCheckId = $formFilters.find('.valueResourceCheckId').val();
		if(filterResourceCheckId != null && filterResourceCheckId !== '')
			filters.push({ name: 'fq', value: 'resourceCheckId:' + filterResourceCheckId });

		var filterStudentFacing = $formFilters.find('.valueStudentFacing').val();
		if(filterStudentFacing != null && filterStudentFacing !== '')
			filters.push({ name: 'fq', value: 'studentFacing:' + filterStudentFacing });

		var filterSource = $formFilters.find('.valueSource').val();
		if(filterSource != null && filterSource !== '')
			filters.push({ name: 'fq', value: 'source:' + filterSource });

		var filterReviewStatus = $formFilters.find('.valueReviewStatus').val();
		if(filterReviewStatus != null && filterReviewStatus !== '')
			filters.push({ name: 'fq', value: 'reviewStatus:' + filterReviewStatus });

		var filterLastReviewDate = $formFilters.find('.valueLastReviewDate').val();
		if(filterLastReviewDate != null && filterLastReviewDate !== '')
			filters.push({ name: 'fq', value: 'lastReviewDate:' + filterLastReviewDate });

		var filterReviewByID = $formFilters.find('.valueReviewByID').val();
		if(filterReviewByID != null && filterReviewByID !== '')
			filters.push({ name: 'fq', value: 'reviewByID:' + filterReviewByID });

		var filterReviewRating = $formFilters.find('.valueReviewRating').val();
		if(filterReviewRating != null && filterReviewRating !== '')
			filters.push({ name: 'fq', value: 'reviewRating:' + filterReviewRating });

		var filterTechnicalCompleteness = $formFilters.find('.valueTechnicalCompleteness').val();
		if(filterTechnicalCompleteness != null && filterTechnicalCompleteness !== '')
			filters.push({ name: 'fq', value: 'technicalCompleteness:' + filterTechnicalCompleteness });

		var filterContentAccuracy = $formFilters.find('.valueContentAccuracy').val();
		if(filterContentAccuracy != null && filterContentAccuracy !== '')
			filters.push({ name: 'fq', value: 'contentAccuracy:' + filterContentAccuracy });

		var filterPedagogy = $formFilters.find('.valuePedagogy').val();
		if(filterPedagogy != null && filterPedagogy !== '')
			filters.push({ name: 'fq', value: 'pedagogy:' + filterPedagogy });

		var filterStandardsAlignment = $formFilters.find('.valueStandardsAlignment').val();
		if(filterStandardsAlignment != null && filterStandardsAlignment !== '')
			filters.push({ name: 'fq', value: 'standardsAlignment:' + filterStandardsAlignment });

		var filterStandardsAlignmentComment = $formFilters.find('.valueStandardsAlignmentComment').val();
		if(filterStandardsAlignmentComment != null && filterStandardsAlignmentComment !== '')
			filters.push({ name: 'fq', value: 'standardsAlignmentComment:' + filterStandardsAlignmentComment });

		var filterSubjectMatter = $formFilters.find('.valueSubjectMatter').val();
		if(filterSubjectMatter != null && filterSubjectMatter !== '')
			filters.push({ name: 'fq', value: 'subjectMatter:' + filterSubjectMatter });

		var filterSubjectMatterComment = $formFilters.find('.valueSubjectMatterComment').val();
		if(filterSubjectMatterComment != null && filterSubjectMatterComment !== '')
			filters.push({ name: 'fq', value: 'subjectMatterComment:' + filterSubjectMatterComment });

		var filterSupportsTeaching = $formFilters.find('.valueSupportsTeaching').val();
		if(filterSupportsTeaching != null && filterSupportsTeaching !== '')
			filters.push({ name: 'fq', value: 'supportsTeaching:' + filterSupportsTeaching });

		var filterSupportsTeachingComment = $formFilters.find('.valueSupportsTeachingComment').val();
		if(filterSupportsTeachingComment != null && filterSupportsTeachingComment !== '')
			filters.push({ name: 'fq', value: 'supportsTeachingComment:' + filterSupportsTeachingComment });

		var filterAssessmentsQuality = $formFilters.find('.valueAssessmentsQuality').val();
		if(filterAssessmentsQuality != null && filterAssessmentsQuality !== '')
			filters.push({ name: 'fq', value: 'assessmentsQuality:' + filterAssessmentsQuality });

		var filterAssessmentsQualityComment = $formFilters.find('.valueAssessmentsQualityComment').val();
		if(filterAssessmentsQualityComment != null && filterAssessmentsQualityComment !== '')
			filters.push({ name: 'fq', value: 'assessmentsQualityComment:' + filterAssessmentsQualityComment });

		var filterInteractivityQuality = $formFilters.find('.valueInteractivityQuality').val();
		if(filterInteractivityQuality != null && filterInteractivityQuality !== '')
			filters.push({ name: 'fq', value: 'interactivityQuality:' + filterInteractivityQuality });

		var filterInteractivityQualityComment = $formFilters.find('.valueInteractivityQualityComment').val();
		if(filterInteractivityQualityComment != null && filterInteractivityQualityComment !== '')
			filters.push({ name: 'fq', value: 'interactivityQualityComment:' + filterInteractivityQualityComment });

		var filterInstructionalQuality = $formFilters.find('.valueInstructionalQuality').val();
		if(filterInstructionalQuality != null && filterInstructionalQuality !== '')
			filters.push({ name: 'fq', value: 'instructionalQuality:' + filterInstructionalQuality });

		var filterInstructionalQualityComment = $formFilters.find('.valueInstructionalQualityComment').val();
		if(filterInstructionalQualityComment != null && filterInstructionalQualityComment !== '')
			filters.push({ name: 'fq', value: 'instructionalQualityComment:' + filterInstructionalQualityComment });

		var filterDeeperLearning = $formFilters.find('.valueDeeperLearning').val();
		if(filterDeeperLearning != null && filterDeeperLearning !== '')
			filters.push({ name: 'fq', value: 'deeperLearning:' + filterDeeperLearning });

		var filterDeeperLearningComment = $formFilters.find('.valueDeeperLearningComment').val();
		if(filterDeeperLearningComment != null && filterDeeperLearningComment !== '')
			filters.push({ name: 'fq', value: 'deeperLearningComment:' + filterDeeperLearningComment });

		var filterPartner = $formFilters.find('.valuePartner').val();
		if(filterPartner != null && filterPartner !== '')
			filters.push({ name: 'fq', value: 'partner:' + filterPartner });

		var filterCreateDate = $formFilters.find('.valueCreateDate').val();
		if(filterCreateDate != null && filterCreateDate !== '')
			filters.push({ name: 'fq', value: 'createDate:' + filterCreateDate });

		var filterType = $formFilters.find('.valueType').val();
		if(filterType != null && filterType !== '')
			filters.push({ name: 'fq', value: 'type:' + filterType });

		var filterFeatured = $formFilters.find('.valueFeatured').val();
		if(filterFeatured != null && filterFeatured !== '')
			filters.push({ name: 'fq', value: 'featured:' + filterFeatured });

		var filterPage = $formFilters.find('.valuePage').val();
		if(filterPage != null && filterPage !== '')
			filters.push({ name: 'fq', value: 'page:' + filterPage });

		var filterActive = $formFilters.find('.valueActive').val();
		if(filterActive != null && filterActive !== '')
			filters.push({ name: 'fq', value: 'active:' + filterActive });

		var filterPublic = $formFilters.find('.valuePublic').val();
		if(filterPublic != null && filterPublic !== '')
			filters.push({ name: 'fq', value: 'Public:' + filterPublic });

		var filterXwd_id = $formFilters.find('.valueXwd_id').val();
		if(filterXwd_id != null && filterXwd_id !== '')
			filters.push({ name: 'fq', value: 'xwd_id:' + filterXwd_id });

		var filterMediaType = $formFilters.find('.valueMediaType').val();
		if(filterMediaType != null && filterMediaType !== '')
			filters.push({ name: 'fq', value: 'mediaType:' + filterMediaType });

		var filterAccess = $formFilters.find('.valueAccess').val();
		if(filterAccess != null && filterAccess !== '')
			filters.push({ name: 'fq', value: 'access:' + filterAccess });

		var filterMemberRating = $formFilters.find('.valueMemberRating').val();
		if(filterMemberRating != null && filterMemberRating !== '')
			filters.push({ name: 'fq', value: 'memberRating:' + filterMemberRating });

		var filterAligned = $formFilters.find('.valueAligned').val();
		if(filterAligned != null && filterAligned !== '')
			filters.push({ name: 'fq', value: 'aligned:' + filterAligned });

		var filterPageUrl = $formFilters.find('.valuePageUrl').val();
		if(filterPageUrl != null && filterPageUrl !== '')
			filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

		var filterIndexed = $formFilters.find('.valueIndexed').val();
		if(filterIndexed != null && filterIndexed !== '')
			filters.push({ name: 'fq', value: 'indexed:' + filterIndexed });

		var filterLastIndexDate = $formFilters.find('.valueLastIndexDate').val();
		if(filterLastIndexDate != null && filterLastIndexDate !== '')
			filters.push({ name: 'fq', value: 'lastIndexDate:' + filterLastIndexDate });

		var filterIndexRequired = $formFilters.find('.valueIndexRequired').val();
		if(filterIndexRequired != null && filterIndexRequired !== '')
			filters.push({ name: 'fq', value: 'indexRequired:' + filterIndexRequired });

		var filterIndexRequiredDate = $formFilters.find('.valueIndexRequiredDate').val();
		if(filterIndexRequiredDate != null && filterIndexRequiredDate !== '')
			filters.push({ name: 'fq', value: 'indexRequiredDate:' + filterIndexRequiredDate });

		var filterRescrape = $formFilters.find('.valueRescrape').val();
		if(filterRescrape != null && filterRescrape !== '')
			filters.push({ name: 'fq', value: 'rescrape:' + filterRescrape });

		var filterGoButton = $formFilters.find('.valueGoButton').val();
		if(filterGoButton != null && filterGoButton !== '')
			filters.push({ name: 'fq', value: 'goButton:' + filterGoButton });

		var filterDownloadButton = $formFilters.find('.valueDownloadButton').val();
		if(filterDownloadButton != null && filterDownloadButton !== '')
			filters.push({ name: 'fq', value: 'downloadButton:' + filterDownloadButton });

		var filterTopOfSearch = $formFilters.find('.valueTopOfSearch').val();
		if(filterTopOfSearch != null && filterTopOfSearch !== '')
			filters.push({ name: 'fq', value: 'topOfSearch:' + filterTopOfSearch });

		var filterRemove = $formFilters.find('.valueRemove').val();
		if(filterRemove != null && filterRemove !== '')
			filters.push({ name: 'fq', value: 'remove:' + filterRemove });

		var filterSpam = $formFilters.find('.valueSpam').val();
		if(filterSpam != null && filterSpam !== '')
			filters.push({ name: 'fq', value: 'spam:' + filterSpam });

		var filterTopOfSearchInt = $formFilters.find('.valueTopOfSearchInt').val();
		if(filterTopOfSearchInt != null && filterTopOfSearchInt !== '')
			filters.push({ name: 'fq', value: 'topOfSearchInt:' + filterTopOfSearchInt });

		var filterPartnerInt = $formFilters.find('.valuePartnerInt').val();
		if(filterPartnerInt != null && filterPartnerInt !== '')
			filters.push({ name: 'fq', value: 'partnerInt:' + filterPartnerInt });

		var filterReviewResource = $formFilters.find('.valueReviewResource').val();
		if(filterReviewResource != null && filterReviewResource !== '')
			filters.push({ name: 'fq', value: 'reviewResource:' + filterReviewResource });

		var filterOldUrl = $formFilters.find('.valueOldUrl').val();
		if(filterOldUrl != null && filterOldUrl !== '')
			filters.push({ name: 'fq', value: 'oldUrl:' + filterOldUrl });

		var filterContentDisplayOk = $formFilters.find('.valueContentDisplayOk').val();
		if(filterContentDisplayOk != null && filterContentDisplayOk !== '')
			filters.push({ name: 'fq', value: 'contentDisplayOk:' + filterContentDisplayOk });

		var filterMetadata = $formFilters.find('.valueMetadata').val();
		if(filterMetadata != null && filterMetadata !== '')
			filters.push({ name: 'fq', value: 'metadata:' + filterMetadata });

		var filterApprovalStatus = $formFilters.find('.valueApprovalStatus').val();
		if(filterApprovalStatus != null && filterApprovalStatus !== '')
			filters.push({ name: 'fq', value: 'approvalStatus:' + filterApprovalStatus });

		var filterApprovalStatusDate = $formFilters.find('.valueApprovalStatusDate').val();
		if(filterApprovalStatusDate != null && filterApprovalStatusDate !== '')
			filters.push({ name: 'fq', value: 'approvalStatusDate:' + filterApprovalStatusDate });

		var filterSpamUser = $formFilters.find('.valueSpamUser').val();
		if(filterSpamUser != null && filterSpamUser !== '')
			filters.push({ name: 'fq', value: 'spamUser:' + filterSpamUser });

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

	var valueLicenseId = $formValues.find('.valueLicenseId').val();
	if(valueLicenseId != null && valueLicenseId !== '')
		vals['licenseId'] = valueLicenseId;

	var valueContributorId = $formValues.find('.valueContributorId').val();
	if(valueContributorId != null && valueContributorId !== '')
		vals['contributorId'] = valueContributorId;

	var valueContributionDate = $formValues.find('.valueContributionDate').val();
	if(valueContributionDate != null && valueContributionDate !== '')
		vals['contributionDate'] = valueContributionDate;

	var valueDescription = $formValues.find('.valueDescription').val();
	if(valueDescription != null && valueDescription !== '')
		vals['description'] = valueDescription;

	var valueTitle = $formValues.find('.valueTitle').val();
	if(valueTitle != null && valueTitle !== '')
		vals['title'] = valueTitle;

	var valueKeywordsStr = $formValues.find('.valueKeywordsStr').val();
	if(valueKeywordsStr != null && valueKeywordsStr !== '')
		vals['keywordsStr'] = valueKeywordsStr;

	var valueKeywords = $formValues.find('.valueKeywords').val();
	if(valueKeywords != null && valueKeywords !== '')
		vals['keywords'] = valueKeywords;

	var valueGeneratedKeywordsStr = $formValues.find('.valueGeneratedKeywordsStr').val();
	if(valueGeneratedKeywordsStr != null && valueGeneratedKeywordsStr !== '')
		vals['generatedKeywordsStr'] = valueGeneratedKeywordsStr;

	var valueGeneratedKeywords = $formValues.find('.valueGeneratedKeywords').val();
	if(valueGeneratedKeywords != null && valueGeneratedKeywords !== '')
		vals['generatedKeywords'] = valueGeneratedKeywords;

	var valueLanguage = $formValues.find('.valueLanguage').val();
	if(valueLanguage != null && valueLanguage !== '')
		vals['language'] = valueLanguage;

	var valueLastEditorId = $formValues.find('.valueLastEditorId').val();
	if(valueLastEditorId != null && valueLastEditorId !== '')
		vals['lastEditorId'] = valueLastEditorId;

	var valueLastEditDate = $formValues.find('.valueLastEditDate').val();
	if(valueLastEditDate != null && valueLastEditDate !== '')
		vals['lastEditDate'] = valueLastEditDate;

	var valueCurrikiLicense = $formValues.find('.valueCurrikiLicense').val();
	if(valueCurrikiLicense != null && valueCurrikiLicense !== '')
		vals['currikiLicense'] = valueCurrikiLicense;

	var valueExternalUrl = $formValues.find('.valueExternalUrl').val();
	if(valueExternalUrl != null && valueExternalUrl !== '')
		vals['externalUrl'] = valueExternalUrl;

	var valueResourceChecked = $formValues.find('.valueResourceChecked').val();
	if(valueResourceChecked != null && valueResourceChecked !== '')
		vals['resourceChecked'] = valueResourceChecked;

	var valueContent = $formValues.find('.valueContent').val();
	if(valueContent != null && valueContent !== '')
		vals['content'] = valueContent;

	var valueResourceCheckRequestNote = $formValues.find('.valueResourceCheckRequestNote').val();
	if(valueResourceCheckRequestNote != null && valueResourceCheckRequestNote !== '')
		vals['resourceCheckRequestNote'] = valueResourceCheckRequestNote;

	var valueResourceCheckDate = $formValues.find('.valueResourceCheckDate').val();
	if(valueResourceCheckDate != null && valueResourceCheckDate !== '')
		vals['resourceCheckDate'] = valueResourceCheckDate;

	var valueResourceCheckId = $formValues.find('.valueResourceCheckId').val();
	if(valueResourceCheckId != null && valueResourceCheckId !== '')
		vals['resourceCheckId'] = valueResourceCheckId;

	var valueResourceCheckNote = $formValues.find('.valueResourceCheckNote').val();
	if(valueResourceCheckNote != null && valueResourceCheckNote !== '')
		vals['resourceCheckNote'] = valueResourceCheckNote;

	var valueStudentFacing = $formValues.find('.valueStudentFacing').val();
	if(valueStudentFacing != null && valueStudentFacing !== '')
		vals['studentFacing'] = valueStudentFacing;

	var valueSource = $formValues.find('.valueSource').val();
	if(valueSource != null && valueSource !== '')
		vals['source'] = valueSource;

	var valueReviewStatus = $formValues.find('.valueReviewStatus').val();
	if(valueReviewStatus != null && valueReviewStatus !== '')
		vals['reviewStatus'] = valueReviewStatus;

	var valueLastReviewDate = $formValues.find('.valueLastReviewDate').val();
	if(valueLastReviewDate != null && valueLastReviewDate !== '')
		vals['lastReviewDate'] = valueLastReviewDate;

	var valueReviewByID = $formValues.find('.valueReviewByID').val();
	if(valueReviewByID != null && valueReviewByID !== '')
		vals['reviewByID'] = valueReviewByID;

	var valueReviewRating = $formValues.find('.valueReviewRating').val();
	if(valueReviewRating != null && valueReviewRating !== '')
		vals['reviewRating'] = valueReviewRating;

	var valueTechnicalCompleteness = $formValues.find('.valueTechnicalCompleteness').val();
	if(valueTechnicalCompleteness != null && valueTechnicalCompleteness !== '')
		vals['technicalCompleteness'] = valueTechnicalCompleteness;

	var valueContentAccuracy = $formValues.find('.valueContentAccuracy').val();
	if(valueContentAccuracy != null && valueContentAccuracy !== '')
		vals['contentAccuracy'] = valueContentAccuracy;

	var valuePedagogy = $formValues.find('.valuePedagogy').val();
	if(valuePedagogy != null && valuePedagogy !== '')
		vals['pedagogy'] = valuePedagogy;

	var valueRatingComment = $formValues.find('.valueRatingComment').val();
	if(valueRatingComment != null && valueRatingComment !== '')
		vals['ratingComment'] = valueRatingComment;

	var valueStandardsAlignment = $formValues.find('.valueStandardsAlignment').val();
	if(valueStandardsAlignment != null && valueStandardsAlignment !== '')
		vals['standardsAlignment'] = valueStandardsAlignment;

	var valueStandardsAlignmentComment = $formValues.find('.valueStandardsAlignmentComment').val();
	if(valueStandardsAlignmentComment != null && valueStandardsAlignmentComment !== '')
		vals['standardsAlignmentComment'] = valueStandardsAlignmentComment;

	var valueSubjectMatter = $formValues.find('.valueSubjectMatter').val();
	if(valueSubjectMatter != null && valueSubjectMatter !== '')
		vals['subjectMatter'] = valueSubjectMatter;

	var valueSubjectMatterComment = $formValues.find('.valueSubjectMatterComment').val();
	if(valueSubjectMatterComment != null && valueSubjectMatterComment !== '')
		vals['subjectMatterComment'] = valueSubjectMatterComment;

	var valueSupportsTeaching = $formValues.find('.valueSupportsTeaching').val();
	if(valueSupportsTeaching != null && valueSupportsTeaching !== '')
		vals['supportsTeaching'] = valueSupportsTeaching;

	var valueSupportsTeachingComment = $formValues.find('.valueSupportsTeachingComment').val();
	if(valueSupportsTeachingComment != null && valueSupportsTeachingComment !== '')
		vals['supportsTeachingComment'] = valueSupportsTeachingComment;

	var valueAssessmentsQuality = $formValues.find('.valueAssessmentsQuality').val();
	if(valueAssessmentsQuality != null && valueAssessmentsQuality !== '')
		vals['assessmentsQuality'] = valueAssessmentsQuality;

	var valueAssessmentsQualityComment = $formValues.find('.valueAssessmentsQualityComment').val();
	if(valueAssessmentsQualityComment != null && valueAssessmentsQualityComment !== '')
		vals['assessmentsQualityComment'] = valueAssessmentsQualityComment;

	var valueInteractivityQuality = $formValues.find('.valueInteractivityQuality').val();
	if(valueInteractivityQuality != null && valueInteractivityQuality !== '')
		vals['interactivityQuality'] = valueInteractivityQuality;

	var valueInteractivityQualityComment = $formValues.find('.valueInteractivityQualityComment').val();
	if(valueInteractivityQualityComment != null && valueInteractivityQualityComment !== '')
		vals['interactivityQualityComment'] = valueInteractivityQualityComment;

	var valueInstructionalQuality = $formValues.find('.valueInstructionalQuality').val();
	if(valueInstructionalQuality != null && valueInstructionalQuality !== '')
		vals['instructionalQuality'] = valueInstructionalQuality;

	var valueInstructionalQualityComment = $formValues.find('.valueInstructionalQualityComment').val();
	if(valueInstructionalQualityComment != null && valueInstructionalQualityComment !== '')
		vals['instructionalQualityComment'] = valueInstructionalQualityComment;

	var valueDeeperLearning = $formValues.find('.valueDeeperLearning').val();
	if(valueDeeperLearning != null && valueDeeperLearning !== '')
		vals['deeperLearning'] = valueDeeperLearning;

	var valueDeeperLearningComment = $formValues.find('.valueDeeperLearningComment').val();
	if(valueDeeperLearningComment != null && valueDeeperLearningComment !== '')
		vals['deeperLearningComment'] = valueDeeperLearningComment;

	var valuePartner = $formValues.find('.valuePartner').val();
	if(valuePartner != null && valuePartner !== '')
		vals['partner'] = valuePartner;

	var valueCreateDate = $formValues.find('.valueCreateDate').val();
	if(valueCreateDate != null && valueCreateDate !== '')
		vals['createDate'] = valueCreateDate;

	var valueType = $formValues.find('.valueType').val();
	if(valueType != null && valueType !== '')
		vals['type'] = valueType;

	var valueFeatured = $formValues.find('.valueFeatured').val();
	if(valueFeatured != null && valueFeatured !== '')
		vals['featured'] = valueFeatured;

	var valuePage = $formValues.find('.valuePage').val();
	if(valuePage != null && valuePage !== '')
		vals['page'] = valuePage;

	var valueActive = $formValues.find('.valueActive').val();
	if(valueActive != null && valueActive !== '')
		vals['active'] = valueActive;

	var valuePublic = $formValues.find('.valuePublic').val();
	if(valuePublic != null && valuePublic !== '')
		vals['Public'] = valuePublic;

	var valueXwd_id = $formValues.find('.valueXwd_id').val();
	if(valueXwd_id != null && valueXwd_id !== '')
		vals['xwd_id'] = valueXwd_id;

	var valueMediaType = $formValues.find('.valueMediaType').val();
	if(valueMediaType != null && valueMediaType !== '')
		vals['mediaType'] = valueMediaType;

	var valueAccess = $formValues.find('.valueAccess').val();
	if(valueAccess != null && valueAccess !== '')
		vals['access'] = valueAccess;

	var valueMemberRating = $formValues.find('.valueMemberRating').val();
	if(valueMemberRating != null && valueMemberRating !== '')
		vals['memberRating'] = valueMemberRating;

	var valueAligned = $formValues.find('.valueAligned').val();
	if(valueAligned != null && valueAligned !== '')
		vals['aligned'] = valueAligned;

	var valuePageUrl = $formValues.find('.valuePageUrl').val();
	if(valuePageUrl != null && valuePageUrl !== '')
		vals['pageUrl'] = valuePageUrl;

	var valueIndexed = $formValues.find('.valueIndexed').val();
	if(valueIndexed != null && valueIndexed !== '')
		vals['indexed'] = valueIndexed;

	var valueLastIndexDate = $formValues.find('.valueLastIndexDate').val();
	if(valueLastIndexDate != null && valueLastIndexDate !== '')
		vals['lastIndexDate'] = valueLastIndexDate;

	var valueIndexRequired = $formValues.find('.valueIndexRequired').val();
	if(valueIndexRequired != null && valueIndexRequired !== '')
		vals['indexRequired'] = valueIndexRequired;

	var valueIndexRequiredDate = $formValues.find('.valueIndexRequiredDate').val();
	if(valueIndexRequiredDate != null && valueIndexRequiredDate !== '')
		vals['indexRequiredDate'] = valueIndexRequiredDate;

	var valueRescrape = $formValues.find('.valueRescrape').val();
	if(valueRescrape != null && valueRescrape !== '')
		vals['rescrape'] = valueRescrape;

	var valueGoButton = $formValues.find('.valueGoButton').val();
	if(valueGoButton != null && valueGoButton !== '')
		vals['goButton'] = valueGoButton;

	var valueDownloadButton = $formValues.find('.valueDownloadButton').val();
	if(valueDownloadButton != null && valueDownloadButton !== '')
		vals['downloadButton'] = valueDownloadButton;

	var valueTopOfSearch = $formValues.find('.valueTopOfSearch').val();
	if(valueTopOfSearch != null && valueTopOfSearch !== '')
		vals['topOfSearch'] = valueTopOfSearch;

	var valueRemove = $formValues.find('.valueRemove').val();
	if(valueRemove != null && valueRemove !== '')
		vals['remove'] = valueRemove;

	var valueSpam = $formValues.find('.valueSpam').val();
	if(valueSpam != null && valueSpam !== '')
		vals['spam'] = valueSpam;

	var valueTopOfSearchInt = $formValues.find('.valueTopOfSearchInt').val();
	if(valueTopOfSearchInt != null && valueTopOfSearchInt !== '')
		vals['topOfSearchInt'] = valueTopOfSearchInt;

	var valuePartnerInt = $formValues.find('.valuePartnerInt').val();
	if(valuePartnerInt != null && valuePartnerInt !== '')
		vals['partnerInt'] = valuePartnerInt;

	var valueReviewResource = $formValues.find('.valueReviewResource').val();
	if(valueReviewResource != null && valueReviewResource !== '')
		vals['reviewResource'] = valueReviewResource;

	var valueOldUrl = $formValues.find('.valueOldUrl').val();
	if(valueOldUrl != null && valueOldUrl !== '')
		vals['oldUrl'] = valueOldUrl;

	var valueContentDisplayOk = $formValues.find('.valueContentDisplayOk').val();
	if(valueContentDisplayOk != null && valueContentDisplayOk !== '')
		vals['contentDisplayOk'] = valueContentDisplayOk;

	var valueMetadata = $formValues.find('.valueMetadata').val();
	if(valueMetadata != null && valueMetadata !== '')
		vals['metadata'] = valueMetadata;

	var valueApprovalStatus = $formValues.find('.valueApprovalStatus').val();
	if(valueApprovalStatus != null && valueApprovalStatus !== '')
		vals['approvalStatus'] = valueApprovalStatus;

	var valueApprovalStatusDate = $formValues.find('.valueApprovalStatusDate').val();
	if(valueApprovalStatusDate != null && valueApprovalStatusDate !== '')
		vals['approvalStatusDate'] = valueApprovalStatusDate;

	var valueSpamUser = $formValues.find('.valueSpamUser').val();
	if(valueSpamUser != null && valueSpamUser !== '')
		vals['spamUser'] = valueSpamUser;

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
			var val = o['licenseId'];
			if(vars.includes('licenseId')) {
				$('.inputCurrikiResource' + pk + 'LicenseId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'LicenseId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'LicenseId'));
			}
			var val = o['contributorId'];
			if(vars.includes('contributorId')) {
				$('.inputCurrikiResource' + pk + 'ContributorId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ContributorId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ContributorId'));
			}
			var val = o['contributionDate'];
			if(vars.includes('contributionDate')) {
				$('.inputCurrikiResource' + pk + 'ContributionDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ContributionDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ContributionDate'));
			}
			var val = o['description'];
			if(vars.includes('description')) {
				$('.inputCurrikiResource' + pk + 'Description').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Description').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Description'));
			}
			var val = o['title'];
			if(vars.includes('title')) {
				$('.inputCurrikiResource' + pk + 'Title').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Title').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Title'));
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
			var val = o['generatedKeywordsStr'];
			if(vars.includes('generatedKeywordsStr')) {
				$('.inputCurrikiResource' + pk + 'GeneratedKeywordsStr').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'GeneratedKeywordsStr').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'GeneratedKeywordsStr'));
			}
			var val = o['generatedKeywords'];
			if(vars.includes('generatedKeywords')) {
				$('.inputCurrikiResource' + pk + 'GeneratedKeywords').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'GeneratedKeywords').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'GeneratedKeywords'));
			}
			var val = o['language'];
			if(vars.includes('language')) {
				$('.inputCurrikiResource' + pk + 'Language').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Language').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Language'));
			}
			var val = o['lastEditorId'];
			if(vars.includes('lastEditorId')) {
				$('.inputCurrikiResource' + pk + 'LastEditorId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'LastEditorId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'LastEditorId'));
			}
			var val = o['lastEditDate'];
			if(vars.includes('lastEditDate')) {
				$('.inputCurrikiResource' + pk + 'LastEditDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'LastEditDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'LastEditDate'));
			}
			var val = o['currikiLicense'];
			if(vars.includes('currikiLicense')) {
				$('.inputCurrikiResource' + pk + 'CurrikiLicense').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'CurrikiLicense').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'CurrikiLicense'));
			}
			var val = o['externalUrl'];
			if(vars.includes('externalUrl')) {
				$('.inputCurrikiResource' + pk + 'ExternalUrl').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ExternalUrl').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ExternalUrl'));
			}
			var val = o['resourceChecked'];
			if(vars.includes('resourceChecked')) {
				$('.inputCurrikiResource' + pk + 'ResourceChecked').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ResourceChecked').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ResourceChecked'));
			}
			var val = o['content'];
			if(vars.includes('content')) {
				$('.inputCurrikiResource' + pk + 'Content').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Content').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Content'));
			}
			var val = o['resourceCheckRequestNote'];
			if(vars.includes('resourceCheckRequestNote')) {
				$('.inputCurrikiResource' + pk + 'ResourceCheckRequestNote').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ResourceCheckRequestNote').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ResourceCheckRequestNote'));
			}
			var val = o['resourceCheckDate'];
			if(vars.includes('resourceCheckDate')) {
				$('.inputCurrikiResource' + pk + 'ResourceCheckDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ResourceCheckDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ResourceCheckDate'));
			}
			var val = o['resourceCheckId'];
			if(vars.includes('resourceCheckId')) {
				$('.inputCurrikiResource' + pk + 'ResourceCheckId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ResourceCheckId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ResourceCheckId'));
			}
			var val = o['resourceCheckNote'];
			if(vars.includes('resourceCheckNote')) {
				$('.inputCurrikiResource' + pk + 'ResourceCheckNote').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ResourceCheckNote').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ResourceCheckNote'));
			}
			var val = o['studentFacing'];
			if(vars.includes('studentFacing')) {
				$('.inputCurrikiResource' + pk + 'StudentFacing').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'StudentFacing').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'StudentFacing'));
			}
			var val = o['source'];
			if(vars.includes('source')) {
				$('.inputCurrikiResource' + pk + 'Source').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Source').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Source'));
			}
			var val = o['reviewStatus'];
			if(vars.includes('reviewStatus')) {
				$('.inputCurrikiResource' + pk + 'ReviewStatus').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ReviewStatus').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ReviewStatus'));
			}
			var val = o['lastReviewDate'];
			if(vars.includes('lastReviewDate')) {
				$('.inputCurrikiResource' + pk + 'LastReviewDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'LastReviewDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'LastReviewDate'));
			}
			var val = o['reviewByID'];
			if(vars.includes('reviewByID')) {
				$('.inputCurrikiResource' + pk + 'ReviewByID').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ReviewByID').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ReviewByID'));
			}
			var val = o['reviewRating'];
			if(vars.includes('reviewRating')) {
				$('.inputCurrikiResource' + pk + 'ReviewRating').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ReviewRating').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ReviewRating'));
			}
			var val = o['technicalCompleteness'];
			if(vars.includes('technicalCompleteness')) {
				$('.inputCurrikiResource' + pk + 'TechnicalCompleteness').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'TechnicalCompleteness').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'TechnicalCompleteness'));
			}
			var val = o['contentAccuracy'];
			if(vars.includes('contentAccuracy')) {
				$('.inputCurrikiResource' + pk + 'ContentAccuracy').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ContentAccuracy').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ContentAccuracy'));
			}
			var val = o['pedagogy'];
			if(vars.includes('pedagogy')) {
				$('.inputCurrikiResource' + pk + 'Pedagogy').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Pedagogy').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Pedagogy'));
			}
			var val = o['ratingComment'];
			if(vars.includes('ratingComment')) {
				$('.inputCurrikiResource' + pk + 'RatingComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'RatingComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'RatingComment'));
			}
			var val = o['standardsAlignment'];
			if(vars.includes('standardsAlignment')) {
				$('.inputCurrikiResource' + pk + 'StandardsAlignment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'StandardsAlignment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'StandardsAlignment'));
			}
			var val = o['standardsAlignmentComment'];
			if(vars.includes('standardsAlignmentComment')) {
				$('.inputCurrikiResource' + pk + 'StandardsAlignmentComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'StandardsAlignmentComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'StandardsAlignmentComment'));
			}
			var val = o['subjectMatter'];
			if(vars.includes('subjectMatter')) {
				$('.inputCurrikiResource' + pk + 'SubjectMatter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'SubjectMatter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'SubjectMatter'));
			}
			var val = o['subjectMatterComment'];
			if(vars.includes('subjectMatterComment')) {
				$('.inputCurrikiResource' + pk + 'SubjectMatterComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'SubjectMatterComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'SubjectMatterComment'));
			}
			var val = o['supportsTeaching'];
			if(vars.includes('supportsTeaching')) {
				$('.inputCurrikiResource' + pk + 'SupportsTeaching').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'SupportsTeaching').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'SupportsTeaching'));
			}
			var val = o['supportsTeachingComment'];
			if(vars.includes('supportsTeachingComment')) {
				$('.inputCurrikiResource' + pk + 'SupportsTeachingComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'SupportsTeachingComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'SupportsTeachingComment'));
			}
			var val = o['assessmentsQuality'];
			if(vars.includes('assessmentsQuality')) {
				$('.inputCurrikiResource' + pk + 'AssessmentsQuality').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'AssessmentsQuality').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'AssessmentsQuality'));
			}
			var val = o['assessmentsQualityComment'];
			if(vars.includes('assessmentsQualityComment')) {
				$('.inputCurrikiResource' + pk + 'AssessmentsQualityComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'AssessmentsQualityComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'AssessmentsQualityComment'));
			}
			var val = o['interactivityQuality'];
			if(vars.includes('interactivityQuality')) {
				$('.inputCurrikiResource' + pk + 'InteractivityQuality').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'InteractivityQuality').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'InteractivityQuality'));
			}
			var val = o['interactivityQualityComment'];
			if(vars.includes('interactivityQualityComment')) {
				$('.inputCurrikiResource' + pk + 'InteractivityQualityComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'InteractivityQualityComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'InteractivityQualityComment'));
			}
			var val = o['instructionalQuality'];
			if(vars.includes('instructionalQuality')) {
				$('.inputCurrikiResource' + pk + 'InstructionalQuality').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'InstructionalQuality').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'InstructionalQuality'));
			}
			var val = o['instructionalQualityComment'];
			if(vars.includes('instructionalQualityComment')) {
				$('.inputCurrikiResource' + pk + 'InstructionalQualityComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'InstructionalQualityComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'InstructionalQualityComment'));
			}
			var val = o['deeperLearning'];
			if(vars.includes('deeperLearning')) {
				$('.inputCurrikiResource' + pk + 'DeeperLearning').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'DeeperLearning').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'DeeperLearning'));
			}
			var val = o['deeperLearningComment'];
			if(vars.includes('deeperLearningComment')) {
				$('.inputCurrikiResource' + pk + 'DeeperLearningComment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'DeeperLearningComment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'DeeperLearningComment'));
			}
			var val = o['partner'];
			if(vars.includes('partner')) {
				$('.inputCurrikiResource' + pk + 'Partner').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Partner').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Partner'));
			}
			var val = o['createDate'];
			if(vars.includes('createDate')) {
				$('.inputCurrikiResource' + pk + 'CreateDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'CreateDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'CreateDate'));
			}
			var val = o['type'];
			if(vars.includes('type')) {
				$('.inputCurrikiResource' + pk + 'Type').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Type').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Type'));
			}
			var val = o['featured'];
			if(vars.includes('featured')) {
				$('.inputCurrikiResource' + pk + 'Featured').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Featured').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Featured'));
			}
			var val = o['page'];
			if(vars.includes('page')) {
				$('.inputCurrikiResource' + pk + 'Page').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Page').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Page'));
			}
			var val = o['active'];
			if(vars.includes('active')) {
				$('.inputCurrikiResource' + pk + 'Active').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Active').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Active'));
			}
			var val = o['Public'];
			if(vars.includes('Public')) {
				$('.inputCurrikiResource' + pk + 'Public').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Public').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Public'));
			}
			var val = o['xwd_id'];
			if(vars.includes('xwd_id')) {
				$('.inputCurrikiResource' + pk + 'Xwd_id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Xwd_id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Xwd_id'));
			}
			var val = o['mediaType'];
			if(vars.includes('mediaType')) {
				$('.inputCurrikiResource' + pk + 'MediaType').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'MediaType').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'MediaType'));
			}
			var val = o['access'];
			if(vars.includes('access')) {
				$('.inputCurrikiResource' + pk + 'Access').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Access').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Access'));
			}
			var val = o['memberRating'];
			if(vars.includes('memberRating')) {
				$('.inputCurrikiResource' + pk + 'MemberRating').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'MemberRating').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'MemberRating'));
			}
			var val = o['aligned'];
			if(vars.includes('aligned')) {
				$('.inputCurrikiResource' + pk + 'Aligned').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Aligned').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Aligned'));
			}
			var val = o['pageUrl'];
			if(vars.includes('pageUrl')) {
				$('.inputCurrikiResource' + pk + 'PageUrl').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'PageUrl').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'PageUrl'));
			}
			var val = o['indexed'];
			if(vars.includes('indexed')) {
				$('.inputCurrikiResource' + pk + 'Indexed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Indexed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Indexed'));
			}
			var val = o['lastIndexDate'];
			if(vars.includes('lastIndexDate')) {
				$('.inputCurrikiResource' + pk + 'LastIndexDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'LastIndexDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'LastIndexDate'));
			}
			var val = o['indexRequired'];
			if(vars.includes('indexRequired')) {
				$('.inputCurrikiResource' + pk + 'IndexRequired').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'IndexRequired').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'IndexRequired'));
			}
			var val = o['indexRequiredDate'];
			if(vars.includes('indexRequiredDate')) {
				$('.inputCurrikiResource' + pk + 'IndexRequiredDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'IndexRequiredDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'IndexRequiredDate'));
			}
			var val = o['rescrape'];
			if(vars.includes('rescrape')) {
				$('.inputCurrikiResource' + pk + 'Rescrape').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Rescrape').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Rescrape'));
			}
			var val = o['goButton'];
			if(vars.includes('goButton')) {
				$('.inputCurrikiResource' + pk + 'GoButton').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'GoButton').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'GoButton'));
			}
			var val = o['downloadButton'];
			if(vars.includes('downloadButton')) {
				$('.inputCurrikiResource' + pk + 'DownloadButton').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'DownloadButton').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'DownloadButton'));
			}
			var val = o['topOfSearch'];
			if(vars.includes('topOfSearch')) {
				$('.inputCurrikiResource' + pk + 'TopOfSearch').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'TopOfSearch').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'TopOfSearch'));
			}
			var val = o['remove'];
			if(vars.includes('remove')) {
				$('.inputCurrikiResource' + pk + 'Remove').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Remove').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Remove'));
			}
			var val = o['spam'];
			if(vars.includes('spam')) {
				$('.inputCurrikiResource' + pk + 'Spam').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Spam').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Spam'));
			}
			var val = o['topOfSearchInt'];
			if(vars.includes('topOfSearchInt')) {
				$('.inputCurrikiResource' + pk + 'TopOfSearchInt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'TopOfSearchInt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'TopOfSearchInt'));
			}
			var val = o['partnerInt'];
			if(vars.includes('partnerInt')) {
				$('.inputCurrikiResource' + pk + 'PartnerInt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'PartnerInt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'PartnerInt'));
			}
			var val = o['reviewResource'];
			if(vars.includes('reviewResource')) {
				$('.inputCurrikiResource' + pk + 'ReviewResource').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ReviewResource').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ReviewResource'));
			}
			var val = o['oldUrl'];
			if(vars.includes('oldUrl')) {
				$('.inputCurrikiResource' + pk + 'OldUrl').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'OldUrl').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'OldUrl'));
			}
			var val = o['contentDisplayOk'];
			if(vars.includes('contentDisplayOk')) {
				$('.inputCurrikiResource' + pk + 'ContentDisplayOk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ContentDisplayOk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ContentDisplayOk'));
			}
			var val = o['metadata'];
			if(vars.includes('metadata')) {
				$('.inputCurrikiResource' + pk + 'Metadata').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'Metadata').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'Metadata'));
			}
			var val = o['approvalStatus'];
			if(vars.includes('approvalStatus')) {
				$('.inputCurrikiResource' + pk + 'ApprovalStatus').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ApprovalStatus').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ApprovalStatus'));
			}
			var val = o['approvalStatusDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('approvalStatusDate')) {
				$('.inputCurrikiResource' + pk + 'ApprovalStatusDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'ApprovalStatusDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'ApprovalStatusDate'));
			}
			var val = o['spamUser'];
			if(vars.includes('spamUser')) {
				$('.inputCurrikiResource' + pk + 'SpamUser').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varCurrikiResource' + pk + 'SpamUser').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputCurrikiResource' + pk + 'SpamUser'));
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
