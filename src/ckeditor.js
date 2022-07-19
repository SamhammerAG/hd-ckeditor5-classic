/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';
import SimpleUploadImagePlugin from '@samhammer/ckeditor5-simple-image-upload-plugin/src/simple-upload-image-plugin';
import SimpleButton from '@samhammer/ckeditor5-simple-button-plugin/src/simple-button-plugin';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Paragraph,
	PasteFromOffice,
	TableToolbar,
	ImageBlock,
	ImageToolbar,
	ImageStyle,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Alignment,
	FontColor,
	FontBackgroundColor,
	RemoveFormat,
	List,
	Link,
	ImageInsert,
	Table,
	TableProperties,
	TableCellProperties,

	SimpleUploadImagePlugin,
	SimpleButton
];
