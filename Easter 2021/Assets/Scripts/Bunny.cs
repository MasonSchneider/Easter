using UnityEngine;


public class Bunny : MonoBehaviour
{
    [SerializeField]
    Transform target;

    // Start is called before the first frame update
    void Start()
    {
        LookAtTarget();
    }

    // Update is called once per frame
    void Update()
    {
        LookAtTarget();
    }

    void LookAtTarget()
    {
        transform.LookAt(target);
        var horizontalRotation = transform.rotation;
        horizontalRotation.x = 0;
        horizontalRotation.z = 0;
        transform.rotation = horizontalRotation;
    }
}
