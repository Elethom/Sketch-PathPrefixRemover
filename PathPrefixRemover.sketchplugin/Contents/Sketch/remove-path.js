var onRun = function(context) {
    var selectedLayers = context.selection;
    var loop = selectedLayers.objectEnumerator();
    while (layer = loop.nextObject()) {
        if (layer.isKindOfClass(MSSymbolInstance)) {
            var layerName = layer.name();
            layerName = layerName.split("/").pop();
            layer.setName(layerName);
        }
    }
};
