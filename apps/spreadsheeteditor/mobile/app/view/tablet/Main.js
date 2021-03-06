/*
 *
 * (c) Copyright Ascensio System Limited 2010-2016
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
*/
Ext.define('SSE.view.tablet.Main', {
    extend: 'SSE.view.Main',
    alias: 'widget.setabletmain',

    requires: ([
        'SSE.view.tablet.toolbar.Search',
        'SSE.view.tablet.toolbar.View',
        'SSE.view.WorksheetList'
    ]),

    config: {
        fullscreen: true,
        layout: {
            type: 'vbox',
            pack: 'center'
        }
    },

    initialize: function() {
        this.add(Ext.create('SSE.view.tablet.toolbar.View', {
            hidden      : true
        }));

        this.add(Ext.create('SSE.view.tablet.toolbar.Search', {
            hidden      : true
        }));

        this.add({
            xtype   : 'container',
            layout  : 'vbox',
            id      : 'id-container-document',
            flex    : 1,
            items   : [
                {
                    xtype   : 'container',
                    flex    : 1,
                    id      : 'id-sdkeditor'
                }
            ]
        });

        this.add({
            xtype   : 'panel',
            layout  : 'fit',
            width   : 200,
            height  : 200,
            id      : 'id-worksheets-panel',
            top     : 0,
            left    : 0,
            modal   : true,
            hidden  : true,
            hideOnMaskTap: true,
            items: [{
                xtype: 'seworksheetlist'
            }]
        });

        this.callParent(arguments);
    }
});
