/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var App = require('app');

App.ReassignMasterWizardStep1View = Em.View.extend({

  message: function () {
    messages = [
      Em.I18n.t('services.reassign.step1.message1').format(this.get('controller.content.reassign.display_name')),
      Em.I18n.t('services.reassign.step1.message3').format(this.get('controller.content.reassign.display_name'))
    ];
    if (this.get('controller.content.hasManualSteps')) {
      messages.splice(1,0, Em.I18n.t('services.reassign.step1.message2').format(this.get('controller.content.reassign.display_name')));
    }
    return messages;
  }.property('controller.content.reassign.display_name','controller.content.hasManualSteps'),

  templateName: require('templates/main/service/reassign/step1')

});
