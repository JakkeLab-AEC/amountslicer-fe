# Amount Slicer

Web based service IFC handling service.
(Under construction)

### Used Stack (Framework, Libray, ...)
Next.js, React, Three.js (No R3F used)

### Description
![test_01](https://github.com/user-attachments/assets/70784996-c4a0-4aaa-8975-65eb8c9ff6ba)

1. The IFC file is sent to FastAPI Server as request body.
2. The server will parse the data from ifc file via IfcOpenShell.<br/>
   Parsed data contains basically geometric values as mesh (vertices, faces, and so on).
3. Finally the server returns response the parsed data as JSON response, and Front-end read it and render the objects.

### Parsing Data Example
```python
# Python
geometry_data = {
      "id": element.id(),
      "type": "IfcSlab",
      "geometryType": geometry_type,
      "vertices": vertices,
      "vertices_count": len(vertices),
      "faces": faces,
      "faces_count": len(faces),
      "normals": normals,
      "normals_count": len(normals),
      "edges": edges,
      "edges_count": len(edges),
      "location": location,
  }
```

Through this process, the IFC File rendering can be done on three.js canvas.

---

Server Repository : https://github.com/JakkeLab-AEC/amountslicer-server-core
