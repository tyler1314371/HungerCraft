'use strict';

angular.module('xenon.services', []).
	service('$menuItems', function()
	{
		this.menuItems = [];

		var $menuItemsRef = this;

		var menuItemObj = {
			parent: null,

			title: '',
			link: '', // starting with "./" will refer to parent link concatenation
			state: '', // will be generated from link automatically where "/" (forward slashes) are replaced with "."
			icon: '',
			modal: '',

			isActive: false,
			label: null,

			menuItems: [],

			setLabel: function(label, color, hideWhenCollapsed)
			{
				if(typeof hideWhenCollapsed == 'undefined')
					hideWhenCollapsed = true;

				this.label = {
					text: label,
					classname: color,
					collapsedHide: hideWhenCollapsed
				};

				return this;
			},

			addItem: function(title, link, icon, modal)
			{
				var parent = this,
					item = angular.extend(angular.copy(menuItemObj), {
						parent: parent,

						title: title,
						link: link,
						icon: icon,
						modal: modal
					});

				if(item.link)
				{
					if(item.link.match(/^\./))
						item.link = parent.link + item.link.substring(1, link.length);

					if(item.link.match(/^-/))
						item.link = parent.link + '-' + item.link.substring(2, link.length);

					item.state = $menuItemsRef.toStatePath(item.link);
				}

				this.menuItems.push(item);

				return item;
			}
		};

		this.addItem = function(title, link, icon, modal)
		{
			var item = angular.extend(angular.copy(menuItemObj), {
				title: title,
				link: link,
				state: '',
				icon: icon,
				modal: modal
			});

			this.menuItems.push(item);

			return item;
		};

		this.getAll = function()
		{
			return this.menuItems;
		};

		this.prepareSidebarMenu = function()
		{
			var layouts      = this.addItem('Layout & Skins',	'/app/dashboard-variant-1',	'linecons-database', 'modal-4');
			var dashboard    = this.addItem('Dashboard', 		'/app/dashboard-variant-1', 			'fa-question', 'modal-3');
			//var logout    = this.addItem('Dashboard', 		'/login-light', 			'linecons-desktop');

			return this;
		};

		this.prepareHorizontalMenu = function()
		{
			var metal      = this.addItem('M',	'/app/dashboard-variant-1',	'linecons-cd', 'modal-4');
			var crystal      = this.addItem('C',	'/app/dashboard-variant-1',	'linecons-diamond', 'modal-4');
			var food      = this.addItem('F',	'/app/dashboard-variant-1',	'linecons-fire', 'modal-4');
			var condition      = this.addItem('CON',	'/app/dashboard-variant-1',	'', 'modal-4');
			//var dashboard    = this.addItem('Dashboard', 		'/app/dashboard-variant-1', 			'fa-question', 'modal-3');
			//var logout    = this.addItem('Dashboard', 		'/login-light', 			'linecons-desktop');

			return this;
		}

		this.instantiate = function()
		{
			return angular.copy( this );
		}

		this.toStatePath = function(path)
		{
			return path.replace(/\//g, '.').replace(/^\./, '');
		};

		this.setActive = function(path)
		{
			this.iterateCheck(this.menuItems, this.toStatePath(path));
		};

		this.setActiveParent = function(item)
		{
			item.isActive = true;
			item.isOpen = true;

			if(item.parent)
				this.setActiveParent(item.parent);
		};

		this.iterateCheck = function(menuItems, currentState)
		{
			angular.forEach(menuItems, function(item)
			{
				if(item.state == currentState)
				{
					item.isActive = true;

					if(item.parent != null)
						$menuItemsRef.setActiveParent(item.parent);
				}
				else
				{
					item.isActive = false;
					item.isOpen = false;

					if(item.menuItems.length)
					{
						$menuItemsRef.iterateCheck(item.menuItems, currentState);
					}
				}
			});
		}
	});
