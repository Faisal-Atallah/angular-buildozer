export default () => {
    return {
        maps: {
            LatLng : class { },
            Map: class {},
            Animation: {},
            BicyclingLayer() { },
            Circle() { },
            ControlPosition: {},
            Data() { },
            DirectionsRenderer() { },
            DirectionsService() { },
            DirectionsStatus: {},
            DirectionsTravelMode: {},
            DirectionsUnitSystem: {},
            DistanceMatrixElementStatus: {},
            DistanceMatrixService() { },
            DistanceMatrixStatus: {},
            ElevationService() { },
            ElevationStatus: {},
            FusionTablesLayer() { },
            Geocoder() { },
            GeocoderLocationType: {},
            GeocoderStatus: {},
            GroundOverlay() { },
            ImageMapType() { },
            InfoWindow() { },
            KmlLayer() { },
            KmlLayerStatus: {},
            LatLngBounds() { },
            MVCArray() { },
            MVCObject() { },
            MapTypeControlStyle: {},
            MapTypeId: {
                HYBRID: '',
                ROADMAP: '',
                SATELLITE: '',
                TERRAIN: ''
            },
            MapTypeRegistry() { },
            Marker() { },
            MarkerImage() { },
            MaxZoomService() {
                return {
                    getMaxZoomAtLatLng() { }
                };
            },
            MaxZoomStatus: {},
            NavigationControlStyle: {},
            OverlayView() { },
            Point() { },
            Polygon() { },
            Polyline() { },
            Rectangle() { },
            SaveWidget() { },
            ScaleControlStyle: {},
            Size() { },
            StreetViewCoverageLayer() { },
            StreetViewPanorama() { },
            StreetViewService() { },
            StreetViewStatus: {},
            StrokePosition: {},
            StyledMapType() { },
            SymbolPath: {},
            TrafficLayer() { },
            TransitLayer() { },
            TransitMode: {},
            TransitRoutePreference: {},
            TravelMode: {},
            UnitSystem: {},
            ZoomControlStyle: {},
            __gjsload__() { },
            event: {
                addListener() { }
            },
            places: {
                AutocompleteService() {
                    return {
                        getPlacePredictions() { }
                    };
                }
            }
        }
    };
};
