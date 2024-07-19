# Amount Slicer

Web based service IFC handling service.
(Under construction)

### Used Stack (Framework, Library, ...)
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

### Current parsable Element
- Slab (IfcSlab)

Parsable elements will be updated gradually.

---
### How to see Ifc Viewer page
- Currently, I'm concentrating on three.js viewport pagg. Thus, please following below

1. Run the server app. Server app repository link is on the below of this README.MD

2. Run terminal at the directory of this repository, and type this command.
```
npm run dev
```

3. Open the address

```
http://localhost:3000/viewport
```

---

Server Repository : https://github.com/JakkeLab-AEC/amountslicer-server-core
