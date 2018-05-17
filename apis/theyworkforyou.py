#!/usr/bin/env python3

import twfy as tr
import requests

import pandas as pd

class TWFYClient:
    def __init__(self):
        self._apikey = 'CiWp6BCWNayvE7zvY2A3565z'

    def get_json(self, uri):
        response = requests.get(uri)
        response.raise_for_status()
        return response.json()

    def main(self):
        constituency = 'Tamworth'  # Or the name of the constituency you want information for
        api_key = ''  # Add your API key here
        mp_uri = "https://www.theyworkforyou.com/api/getMP?constituency={}&output=js&key={}"\
            .format(constituency, self._apikey)

        mp_json = self.get_json(mp_uri)
        # {u'left_reason': u'still_in_office', u'left_house': u'9999-12-31', u'office': [{u'moffice_id':
        # u'uk.parliament.data/Member/4075/GovernmentPost/351', u'dept': u'', u'person': u'24747',
        # u'from_date': u'2016-07-17', u'to_date': u'9999-12-31', u'position': u'Assistant
        # Whip (HM Treasury)', u'source': u''}], u'lastupdate': u'2015-05-08 07:37:04', u'url':
        # u'/mp/24747/christopher_pincher/tamworth', u'entered_house': u'2015-05-08', u'image':
        # u'/images/mpsL/24747.jpeg', u'member_id': u'41282', u'image_width': 78, u'family_name': u'Pincher',
        # u'entered_reason': u'general_election', u'image_height': 118, u'title': u'', u'full_name':
        # u'Christopher Pincher', u'house': u'1', u'person_id': u'24747', u'party': u'Conservative',
        # u'constituency': u'Tamworth', u'given_name': u'Christopher'}

        # Get useful extra information
        person_id = mp_json['person_id']
        extra_uri = "https://www.theyworkforyou.com/api/getMPInfo?id={0}&output=js&key={1}".format(person_id, api_key)
        extra_json = self.get_json(extra_uri)

        # EU Referendum stance
        extra_json['eu_ref_stance']
        # u'Leave'

        # Topics of interest
        extra_json['wrans_subjects']
        # u'High Speed 2 Railway Line, Waste Disposal, Railways, Railways: Construction, Nuclear Waste'

        # Twitter username
        extra_json['twitter_username']
        # u'ChrisPincher'

        # Facebook Page
        extra_json['facebook_page']
        # u'https://facebook.com/ChristopherPincher'


if __name__ == "__main__":
    tc = TWFYClient()

