{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 1,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 403.0, 79.0, 787.0, 742.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"patching_rect" : [ 260.0, 59.0, 136.0, 22.0 ],
					"text" : "buffer~ $$buf_0 480000"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 461.04656982421875, 221.0, 67.0, 22.0 ],
					"text" : "r &&diction"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"linecount" : 32,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 46.046585083007812, 277.0, 434.0, 437.0 ],
					"text" : "{\\\"softcut\\\":[{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":2\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_0\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_1\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_2\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_3\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_0\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_1\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_2\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}\\,{\\\"active\\\":0\\,\\\"presets\\\":[{\\\"rec\\\":0\\,\\\"play\\\":0\\,\\\"rate\\\":1\\,\\\"rate_offset\\\":0\\,\\\"rec_level\\\":1\\,\\\"pre_level\\\":0.5\\,\\\"voice_sync\\\":\\\"-\\\"\\,\\\"buffer\\\":\\\"&&buf_3\\\"\\,\\\"level_slew_time\\\":0\\,\\\"rate_slew_time\\\":0\\,\\\"phase_quant\\\":\\\"-\\\"\\,\\\"fade_time\\\":0.032\\,\\\"loop_start\\\":0\\,\\\"loop_end\\\":0\\,\\\"loop\\\":1\\,\\\"position\\\":\\\"-\\\"\\,\\\"pan\\\":0.5\\,\\\"level\\\":1}]}]}"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 146.546585083007812, 59.0, 67.0, 22.0 ],
					"text" : "r &&diction"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 146.546585083007812, 113.0, 107.0, 22.0 ],
					"text" : "prepend diction_in"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 46.046585083007812, 221.0, 69.0, 22.0 ],
					"text" : "s &&diction"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-2",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "grid-js.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 46.046585083007812, 164.0, 120.0, 19.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 46.046585083007812, 59.0, 50.0, 22.0 ],
					"text" : "compile"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 104.046585083007812, 59.0, 35.0, 22.0 ],
					"text" : "open"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 1 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "grid-js.maxpat",
				"bootpath" : "~/Documents/code/anachronism",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "script.js",
				"bootpath" : "~/Documents/code/anachronism",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
