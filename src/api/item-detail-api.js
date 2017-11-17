export default class ItemDetailApi {
  getMetadata() {
    const mockMetadata = {
      "system_create_dtsi":"2017-11-17T19:44:17Z",
      "system_modified_dtsi":"2017-11-17T19:50:01Z",
      "has_model_ssim":["Image"],
      "id":"dcc61425-c1ae-4af1-8194-5dbdd8638960",
      "accessControl_ssim":["01b8e261-ea5e-4073-be55-6b1e8bc76259"],
      "depositor_ssim":["adam.arling@northwestern.edu"],
      "depositor_tesim":["adam.arling@northwestern.edu"],
      "title_tesim":["Joan Baez Poster"],
      "date_uploaded_dtsi":"2017-11-17T19:44:17Z",
      "date_modified_dtsi":"2017-11-17T19:50:01Z",
      "isPartOf_ssim":["admin_set/default"],
      "accession_number_tesim":[""],
      "ark_tesim":["ark:/99999/fk4z60tn34"],
      "call_number_tesim":[""],
      "caption_tesim":["Awesome Baez caption"],
      "resource_type_tesim":["Image"],
      "creator_tesim":["Joan Stanford"],
      "contributor_tesim":["Joe Photograper"],
      "keyword_tesim":["art, poster art"],
      "publisher_tesim":["Morgan Jones Publishing Co."],
      "language_tesim":["English"],
      "based_near_tesim":["http://sws.geonames.org/5391959/"],
      "based_near_label_tesim":["San Francisco"],
      "description_tesim":["Joan Chandos Baez, born January 9, 1941 is an American folk singer, songwriter, musician, and activist whose contemporary folk music often includes songs of protest or social justice, Baez has performed publicly for over 59 years, releasing over 30 albums. Fluent in Spanish and English, she has also recorded songs in at least six other languages. "],
      "license_tesim":["http://creativecommons.org/licenses/by-sa/3.0/us/"],
      "rights_statement_tesim":["http://rightsstatements.org/vocab/InC/1.0/"],
      "date_created_tesim":["January 1965"],
      "thumbnail_path_ss":"/assets/work-ff055336041c3f7d310ad69109eda4a887b16ec501f35afc0a547c4adb97ee72.png",
      "suppressed_bsi":false,
      "actionable_workflow_roles_ssim":["default-depositing"],
      "workflow_state_name_ssim":["deposited"],
      "member_of_collections_ssim":["Berkeley Folk Festival"],
      "member_of_collection_ids_ssim":["1ed8e649-644d-4fa3-a119-e4846c5e90d6"],
      "visibility_ssi":"open",
      "admin_set_tesim":[""],
      "human_readable_type_tesim":["Image"],
      "read_access_group_ssim":["public"],
      "edit_access_person_ssim":["adam.arling@northwestern.edu"],
      "_version_":1584344021587722240,
      "timestamp":"2017-11-17T19:50:01.740Z",
      "score":3.944439
    };

    return fetch('/json/item-detail.json', {
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    }).then(response => response.json())
      .then(results => {
        console.log(results)
        return results;
      })
      .catch(err => console.error(err.toString()));
  };
}
